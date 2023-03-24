export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    posicion: string;
    ciudad: string;
    pais: string;
    urlFoto: string;
    urlBanner: string;
    sobreMi: string;
    urlGithub: string;

    constructor (id: number, nombre: string, apellido: string, posicion:string, ciudad: string, pais: string, urlFoto: string, urlBanner: string, sobreMi: string, urlGithub:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.posicion=posicion;
        this.ciudad=ciudad;
        this.pais=pais;
        this.urlFoto=urlFoto;
        this.urlBanner=urlBanner;
        this.sobreMi=sobreMi;
        this.urlGithub=urlGithub
    }
}
