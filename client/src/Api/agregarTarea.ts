import axios from "axios";


export async function agregarTarea(tarea: TareasPost) {
    try {
      const data =  await axios.post(
            import.meta.env.VITE_URL_API,
            tarea,
            {
                headers: {
                    'Content-Type': 'application/json',
                    cabeza: 'pasele'
                }
            });
           window.location.reload();
    } catch (error) {
        const {request} = error as {request:{responseText:string}};
        if(request){
            const {message} = JSON.parse(request.responseText);
            alert(message);
        }
    }
}