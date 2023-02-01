export class Experiencia {
    id?: number;
    puesto: string;
    empresa: string;
    inicio: string;
    fin: string;
    descripcion: string;

    constructor( puesto: string, empresa: string, inicio: string, fin: string, descripcion: string){
        this.puesto=puesto;
        this.empresa=empresa;
        this.inicio=inicio;
        this.fin=fin;
        this.descripcion=descripcion;
    }
}
