

export function obtenerFecha ():string[]{
    const date = new Date();
    const fecha = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
    const hora = `${date.getHours()}:${date.getMinutes()}`;
    return [fecha, hora];
}

export function obtenerFormatoFecha(texto:string):string{
    const data = texto.split('T');
    const info = data[0].split('-');
    const orden = [info[2], info[1], info[0]];
    return orden.join('/');
}