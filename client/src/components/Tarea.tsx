
import React from 'react'
import { obtenerFecha, obtenerFormatoFecha } from '../utils/cambiarFecha'
import { editarTarea } from '../Api/editarTarea';
import { eliminarTarea } from '../Api/eliminarTarea';

export function Tarea({ nombre, fecha, hora, id, estado }: TareasRes): JSX.Element {
  const fechaEscrita = obtenerFormatoFecha(fecha);
  const [editar, setEditar] = React.useState(false);
  const [datos, setDatos] = React.useState<TareasPatch>({ nombre, fecha, hora, id, estado });

  const cambiarNombre = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatos({ ...datos, nombre: e.target.value });
  }
  const subir = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const obtener = obtenerFecha();
    const solicitud = {
      ...datos,
      fecha: obtener[0],
      hora: obtener[1],
    }
    await editarTarea(solicitud);
  }
  const cambiarEstado = async () => {
    const obtener = obtenerFecha();
    const solicitud = {
      ...datos,
      fecha: obtener[0],
      hora: obtener[1],
      estado: !estado
    }
    await editarTarea(solicitud);
  }
  const eliminar = async () => {
    await eliminarTarea({ id });
  }
  return (
    <>
      {!editar ? (
        <div
          className=
          {`rounded-xl border-2 flex flex-col 
          ${estado ? "bg-lime-300 border-lime-800" : "bg-yellow-100  border-yellow-600"}`
          }
        >
          <div
            className='flex justify-between ml-2 mt-1'
          >
            <button
              onClick={() => setEditar(true)}
              className={`rounded-md h-fit p-1 py-0 ${estado?'bg-lime-200 hover:bg-lime-400':'text-amber-950 bg-yellow-200 rounded-md hover:bg-yellow-300'}`}
            >Editar</button>
            <span
              onClick={cambiarEstado}
              className={`cursor-pointer select-none mr-2 m-auto h-fit p-1 py-0 ${estado?'bg-lime-200 hover:bg-lime-400':'text-amber-950 bg-yellow-200 rounded-md hover:bg-yellow-300'}`}
            >✓</span>
            <span
              onClick={eliminar}
              className={`cursor-pointer select-none mr-2 ml-0 h-fit p-1 py-0 ${estado?'bg-lime-200 hover:bg-lime-400':'text-amber-950 bg-yellow-200 rounded-md hover:bg-yellow-300'}`}
            >X</span>
          </div>
          <p
            className='m-auto text-[20px] text-center max-w-[95%] text-miama'
          >{nombre}</p>
          <p
            className={`m-auto mb-0 text-xs ${estado?'text-lime-800':'text-yellow-800'}`}
          >{fechaEscrita}</p>
          <p
            className={`m-auto mt-0 mb-2 text-xs ${estado?'text-lime-800':'text-yellow-800'}` }
          >{hora}</p>
        </div>) :
        (
          <form
            onSubmit={subir}
            className='bg-yellow-100 border-2 border-yellow-600 rounded-xl flex flex-col'
          >
            <input
              type="text"
              value={datos.nombre}
              onChange={cambiarNombre}
              className='m-auto mb-0 w-[90%] p-2 py-0 outline-none'
            />
            <div className='flex m-auto mt-3 w-full'>
              <button
                type='submit'
                className='bg-yellow-200 h-fit p-1 py-0 rounded-md hover:bg-yellow-300 w-1/3 m-auto'
              >Aceptar</button>
              <button
                type='button'
                onClick={() => setEditar(false)}
                className='bg-yellow-200 h-fit p-1 py-0 rounded-md hover:bg-yellow-300 w-1/3 m-auto'
              >Cancelar</button>
            </div>
          </form>
        )
      }
    </>
  )
}
