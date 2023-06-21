import axios from "axios";


export async function editarTarea(tarea:TareasPost):Promise<void>{
    try {
        await axios.patch(
            import.meta.env.VITE_URL_API,
             tarea,
             {
                headers:{
                    'Content-Type':'application/json',
                    cabeza:'pasele'
                }
             }
             );
    } catch (error) {
        console.error(error);
    }
    window.location.reload();
}