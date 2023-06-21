import {useRoutes, HashRouter, Navigate} from 'react-router-dom';
import { Contenedor } from './components/Contenedor';

const Rutas = () => useRoutes([
    {
        path:'/tareas/:modo',
        element:<Contenedor/>
    },
    {
        path:'/tareas',
        element:<Navigate to='/tareas/hacer'/>
    },
    {
        path:'/',
        element:<Navigate to='/tareas/hacer'/>
    },
    {
        path:'*',
        element:<p>Not found</p>
    }
]);

export function App():JSX.Element{
    return(
        <HashRouter>
            <Rutas/>
        </HashRouter>
    );
}