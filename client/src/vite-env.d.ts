/// <reference types="vite/client" />

type Hijo = {
    children: JSX.Element | JSX.Element[]
}

//Api http

interface TareasRes  {
    id: number,
    nombre: string,
    estado: boolean,
    fecha: string,
    hora:string
}
interface TareasPost {
    nombre:string,
    fecha:string,
    hora:string
}
interface TareasPatch  {
    id: number,
    nombre: string,
    estado: boolean,
    fecha: string,
    hora: string
}

//Contexto
interface Contexto {
    tareas:TareasRes[],
    setBuscarAccion:{
        (buscar:string):void
    }
}