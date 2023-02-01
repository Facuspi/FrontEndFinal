export class Proyecto {
    id?:number;
    nombre: string;
    fecha: string;
    descripcion: string;

    constructor(nombre: string, fecha: string, descripcion: string){
        this.nombre=nombre;
        this.fecha=fecha;
        this.descripcion=descripcion;

    }
}
