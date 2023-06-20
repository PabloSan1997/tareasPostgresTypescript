import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv';
import boom from '@hapi/boom';
dotenv.config();

const CABEZAPASE = process.env.HEADERPASS;

export function verHeader() {
    return (req: Request, res: Response, next: NextFunction)=>{
        const { cabeza } = req.headers;
        if (cabeza != CABEZAPASE) {
            throw boom.unauthorized("no tienes permiso");
        }
        next();
    }
}