

export async function eliminarTarea(solicitud:{id:number}):Promise<void> {
    try {
        await fetch(
            import.meta.env.VITE_URL_API
            ,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                cabeza:'pasele'
            },
            body:JSON.stringify(solicitud)
        });
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
    window.location.reload();
}