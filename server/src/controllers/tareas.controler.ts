import { pool } from "../db/poolConfig"
import boom from '@hapi/boom';


export class ControllerTareas{
 
    async leerTareas():Promise<TareasRes[]>{
        const data = await pool.query("SELECT * From tareas ORDER BY id");
        const info = data.rows as TareasRes[];
        if(info.length==0){
            throw boom.notFound("No hay datos");
        }
        return info;
    }

    async agregarElemento(cuerpo:TareasReq):Promise<TareasRes>{
        const { nombre, fecha} = cuerpo;
        const query = 'INSERT INTO tareas(nombre, fecha) VALUES($1, $2) RETURNING *';
        const result = await pool.query(query,[ nombre, fecha]);
        const info = result.rows[0];
        return info;
    }

    async leerUna(id:number):Promise<TareasRes>{
        const data = await pool.query("SELECT * From tareas WHERE id=$1",[id]);
        const info = data.rows[0];
        return info;
    }

    async actualizarTarea(cuerpo:TareasRes):Promise<TareasRes>{
        const datos = await this.leerUna(cuerpo.id);
        const nuevo = {...datos, ...cuerpo}
        const {id, nombre, fecha, estado} = nuevo;
        const query = 'UPDATE tareas SET nombre=$1, estado=$2, fecha=$3 WHERE id=$4 RETURNING *';
        const result = await pool.query(query, [nombre, estado, fecha, id]);
        return result.rows[0];
    }
    async borrarUno(id:number):Promise<{message:string}>{
        await pool.query('DELETE FROM tareas WHERE id=$1', [id]);
        return {message:'Se ejecuto con exito'};
    }
}


export type TareasRes = {
    id:number,
    nombre:string,
    estado:boolean,
    fecha: Date
}
export type TareasReq = {
    nombre:string,
    fecha:Date
}