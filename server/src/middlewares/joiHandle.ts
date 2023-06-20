import  {ObjectSchema} from 'joi';
import { TareasReq } from '../controllers/tareas.controler';
import {Request, Response, NextFunction} from 'express';
import boom from '@hapi/boom';
type Entradas = TareasReq | {id:number};

export function joiHandle(schema:ObjectSchema<Entradas>, propierty:'body'){
    return (req: Request, res:Response, next:NextFunction)=>{
        const cuerpo = req[propierty];
        const {error} = schema.validate(cuerpo, {abortEarly:false});
        if(error){
            throw boom.badRequest(error);
        }
        next();
    }
}