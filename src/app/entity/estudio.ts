export class Estudio {
    id?: number;
    titulo: string;
    inicio: string;
    fin: string;
    institucion: string;

    constructor( titulo: string, inicio: string, fin: string, institucion: string){
        this.titulo=titulo;
        this.inicio=inicio;
        this.fin=fin;
        this.institucion=institucion;
    }
}
