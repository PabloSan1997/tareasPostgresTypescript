import React from 'react'
import { Header } from './Header';
import { Buscador } from './Buscador';
import { Formulario } from './Formulario';
import { TareasContexto } from '../context';
import { Tarea } from './Tarea';
import { useNavigate, useParams } from 'react-router-dom';

export function Contenedor(): JSX.Element {
    const { tareas } = TareasContexto();
    const {modo}= useParams();
    const navegar = useNavigate();
    const opcionciones={
        opcion_hacer:'hacer',
        opcion_hechas:'hechas'
    };
    let mostrarTareas:TareasRes[]=[];
    if(modo===opcionciones.opcion_hacer){
        mostrarTareas=tareas.filter(elemento=>!elemento.estado);
    }
    else if(opcionciones.opcion_hechas===modo){
        mostrarTareas=tareas.filter(elemento=>elemento.estado);
    }else{
        navegar('/notFound');
    }
    return (
        <React.Fragment>
            <Header />
            <div className='w-11/12 bg-miama2 h-[80vh] m-auto mt-6 rounded-3xl flex'>
                <Formulario />
                <div className='h-full w-3/4 flex flex-col'>
                <Buscador />
                    <div className='w-full grid grid-cols-3 gap-3 auto-rows-[35%] overflow-y-auto h-[85%] pb-2'>
                    {mostrarTareas.map(elemento => (
                        <Tarea key={elemento.id} {...elemento} />
                    ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}