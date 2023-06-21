import React from 'react'
import { useParams } from 'react-router-dom';
import { Header } from './Header';
import { Buscador } from './Buscador';
import { Formulario } from './Formulario';
import { TareasContexto } from '../context';
import { Tarea } from './Tarea';

export function Contenedor(): JSX.Element {
    const { modo } = useParams();
    const { tareas } = TareasContexto();
    return (
        <React.Fragment>
            <Header />
            <div className='w-11/12 bg-miama2 h-[80vh] m-auto mt-6 rounded-3xl flex'>
                <Formulario />
                <div className='h-full w-3/4 flex flex-col'>
                <Buscador />
                    <div className='w-full grid grid-cols-3 gap-3 auto-rows-[35%] overflow-y-auto h-[85%] pb-2'>
                    {tareas.map(elemento => (
                        <Tarea key={elemento.id} {...elemento} />
                    ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}