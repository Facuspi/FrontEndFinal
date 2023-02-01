export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    ciudad: string;
    pais: string;
    urlFoto: string;
    urlBanner: string;
    sobreMi: string;

    constructor (id: number, nombre: string, apellido: string, ciudad: string, pais: string, urlFoto: string, urlBanner: string, sobreMi: string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.ciudad=ciudad;
        this.pais=pais;
        this.urlFoto=urlFoto;
        this.urlBanner=urlBanner;
        this.sobreMi=sobreMi;
    }
}
