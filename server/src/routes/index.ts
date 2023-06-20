import express, { Express, Router } from "express";
import { routerTareas } from "./tareas.routes";

const routerIndex:Router = express.Router();

export function crearApi(app: Express):void{
    app.use('/api/v1', routerIndex);
    routerIndex.use('/tareas', routerTareas);
}