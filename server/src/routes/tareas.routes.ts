import express, {Router} from 'express';
import { joiHandle } from '../middlewares/joiHandle';
import { agregarDato, editarTarea, unaTarea } from '../middlewares/joiSchemas/tareas.schemas';
import { ControllerTareas } from '../controllers/tareas.controler';
import { verHeader } from '../middlewares/verHeader';


export const routerTareas:Router = express.Router();

const servicios = new ControllerTareas();

routerTareas.get('/', verHeader() ,async (req, res, next)=>{
    try {
        const tareas = await servicios.leerTareas();
        res.json(tareas);
    } catch (error) {
        next(error);
    }
});
routerTareas.get('/:id', verHeader() , async (req, res, next)=>{
    try {
        const data = await servicios.leerUna(Number(req.params.id));
        res.json(data);
    } catch (error) {
        
    }
});
routerTareas.post('/', verHeader(), joiHandle(agregarDato, 'body'),async(req, res, next)=>{
    try {
        const agregar = await servicios.agregarElemento(req.body);
        res.status(201).json(agregar);
    } catch (error) {
        next(error);
    }
});

routerTareas.patch('/', verHeader(), joiHandle(editarTarea, 'body'), async(req, res, next)=>{
    try {
        const editar = await servicios.actualizarTarea(req.body);
        res.json(editar);
    } catch (error) {
        next(error);
    }
});

routerTareas.delete('/', verHeader(), joiHandle(unaTarea, 'body'), async (req, res, next)=>{
    try {
        const data = await servicios.borrarUno(req.body.id);
        res.json(data);
    } catch (error) {
        next(error);
    }
});