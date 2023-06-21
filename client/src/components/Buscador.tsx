import React from 'react'
import { TareasContexto } from '../context';

export function Buscador() {
  const [escribir, setEscribir] = React.useState('');
  const {setBuscarAccion} = TareasContexto();
  const buscar = () => {
    setBuscarAccion(escribir);
    setEscribir("");
  }
  return (
    <div className='w-full h-[10%] flex'>

      <input
        type="text"
        id='buscar'
        className='h-fit w-2/4 px-2 py-1 m-auto mr-1 ml-[20%] outline-none text-miama rounded-xl'
        onChange={e => setEscribir(e.target.value)}
        value={escribir}
        placeholder='Escribir...'
      />

      <button
      className='m-auto ml-0 bg-yellow-500 p-1 text-sm rounded-md px-3 hover:bg-yellow-400 transition-colors'
        onClick={buscar}
        placeholder='Escribir...'
      >Buscar</button>
    </div>
  )
}
