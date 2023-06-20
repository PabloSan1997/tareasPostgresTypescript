import {Pool} from "pg";
import dotenv from "dotenv";
dotenv.config();
const URL_DATABASE = process.env.URL_DATABASE;
export const pool = new Pool({
    connectionString:URL_DATABASE,
    ssl:{
        rejectUnauthorized:false
    }
});

export async function crearTablas(){
    try {
        const query=`CREATE TABLE IF NOT EXISTS tareas(
            id SERIAL PRIMARY KEY,
            nombre VARCHAR(50) NOT NULL,
            estado BOOLEAN default false,
            fecha DATE NOT NULL 
        );`;
        await pool.query(query);
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.log("Problemas con la base de datos");
    }
}