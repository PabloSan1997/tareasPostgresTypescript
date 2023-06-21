
import React from 'react'
import { agregarTarea } from '../Api/agregarTarea';
import { obtenerFecha } from '../utils/cambiarFecha';

export  function Formulario() {
    const [nombre, setNombre] = React.useState('');
    const subir= async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const [fecha, hora] = obtenerFecha();
        const solicitud: TareasPost = {
            nombre,
            fecha,
            hora
        }
       await agregarTarea(solicitud);
    }
    
  return (
    <form onSubmit={subir} className='w-[35%] flex flex-col'>
        <h2 
        className='text-miama font-inter font-bold text-[25px] m-auto my-11'
        >Agregar tarea</h2>
        <label 
        htmlFor="nombre"
        className='text-miama mx-8 text-xl'
        >
          Nombre
        </label>
        <input 
        type="text" 
        onChange={e=>setNombre(e.target.value)}
        placeholder='Escribir...'
        className='text-miama w-10/12 mx-auto text-2xl p-1 outline-none rounded-xl'
        />
        <button 
        type='submit'
        className='m-auto mt-5 bg-yellow-500 p-1 text-[20px] rounded-md px-3 hover:bg-yellow-400 transition-colors'
        >Agregar</button>
    </form>
  )
}
