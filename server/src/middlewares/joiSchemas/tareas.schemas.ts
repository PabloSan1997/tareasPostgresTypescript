import joi from 'joi';
import { TareasReq } from '../../controllers/tareas.controler';

const id = joi.number().integer().min(1);
const nombre = joi.string().min(1).max(50);
const estado = joi.boolean();
const fecha = joi.date();

export const agregarDato:joi.ObjectSchema<TareasReq> = joi.object({
    nombre:nombre.required(),
    fecha:fecha.required()
});

export const editarTarea: joi.ObjectSchema<TareasReq> = joi.object({
    id:id.required(),
    nombre,
    estado,
    fecha
});

export const unaTarea: joi.ObjectSchema<{id:number}> = joi.object({
    id:id.required()
});