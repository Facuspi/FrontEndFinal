export class Proyecto {
    id?:number;
    nombre: string;
    fecha: string;
    descripcion: string;
    url: string;

    constructor(nombre: string, fecha: string, descripcion: string, url:string){
        this.nombre=nombre;
        this.fecha=fecha;
        this.descripcion=descripcion;
        this.url=url;

    }
}
