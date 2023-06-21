import { TareasContexto } from "../context";
import { NavMenu } from "./NavMenu";



export function Header():JSX.Element{
    const {tareas} = TareasContexto();
    const total:number = tareas.length;
    const hechas:number = tareas.filter(elemento=>elemento.estado).length;
    return(
        <header 
        className='w-full h-20 flex justify-between bg-miama shadow-sm shadow-black'
        >
            <h1 className='m-auto ml-10 font-inter font-bold text-[40px] text-miama'>Mis tareas</h1>
            <NavMenu/>
            <p className='m-auto mr-10 font-inter text-[28px] font-medium text-miama'
            >Tareas hechas {hechas}/{total}</p>
        </header>
    );
}