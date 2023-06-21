import axios from 'axios';

export async function leerTareas():Promise<TareasRes[]>{
        const datos = await axios.get(
            import.meta.env.VITE_URL_API
            ,{
            headers:{
                cabeza:'pasele'
            }
        });
        console.log(datos);
        const tareas = datos.data as TareasRes[];
        if(datos.status>300){
            throw {status:datos.status}
        }
        return tareas; 
}