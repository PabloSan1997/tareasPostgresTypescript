import {Request, Response, NextFunction} from 'express';
import {Boom} from '@hapi/boom';

export function boomHandle(error:Boom, req:Request, res:Response, next:NextFunction){
    if(error.isBoom){
        const infoError = error.output.payload;
        res.status(infoError.statusCode).json(infoError);
    }
    next(error);
}