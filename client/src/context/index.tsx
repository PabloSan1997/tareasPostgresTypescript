import React from 'react';
import { leerTareas } from '../Api/leerTareas';

const Contexto = React.createContext({});

export function Provedor({children}:Hijo):JSX.Element{
    const [tareas, setTareas] = React.useState<TareasRes[]>([]);
    const [buscarAccion, setBuscarAccion] = React.useState("");
    const tareasMostrar:TareasRes[]= !buscarAccion ? tareas : tareas.filter(elemento=>{
        const nombre = elemento.nombre.toLocaleUpperCase();
        const busc = buscarAccion.toLocaleUpperCase();
        console.log(busc);
        return nombre.includes(busc);
    });
    console.log(tareasMostrar);
    React.useEffect(()=>{
        (async()=>{
            try {
                const datos = await leerTareas();
                setTareas(datos);
            } catch (error) {
                console.log(error);
            }
        })();
    },[]);
    return(
        <Contexto.Provider
            value={{
                tareas:tareasMostrar,
                setBuscarAccion
            }}
        >
            {children}
        </Contexto.Provider>
    );
}

export const TareasContexto = () => React.useContext(Contexto) as Contexto;