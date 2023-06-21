import { NavLink } from "react-router-dom";


export function NavMenu() {
    return (
        <nav className='flex w-1/4 bg-yellow-200 h-[60%] m-auto rounded-lg overflow-hidden'>
            <ul className='list-none flex h-full w-full'>
                <li className="m-auto text-xl h-full flex w-1/2">
                    <NavLink
                        to='/tareas/hacer'
                        className={(e) =>
                            `px-2  hover:bg-yellow-600  items-center w-full flex justify-center
                        ${e.isActive ? 'bg-yellow-600'
                                : ''}`}
                    >Pendiente</NavLink>
                </li>
                <li className='m-auto text-xl h-full flex w-1/2'>
                    <NavLink
                        to='/tareas/hechas'
                        className={(e) =>
                            `px-2  hover:bg-yellow-600 items-center w-full flex justify-center
                        ${e.isActive ? 'bg-yellow-600'
                                : ''}`}
                    >Hechas</NavLink>
                </li>
            </ul>
        </nav>
    )
}
