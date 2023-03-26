import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../entity/estudio';


@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  url= 'https://backendfinal-8vqp.onrender.com/estudio/'

  constructor(private httpClient:HttpClient) { }

  public verEstudios(): Observable<Estudio[]> {
    return this.httpClient.get<Estudio[]>(this.url + 'lista');
  }

  public verEstudio(id : number): Observable<Estudio>{
    return this.httpClient.get<Estudio>(this.url + `ver/${id}`);
  }

  public crearEstudio(nuevoEstudio: Estudio): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', nuevoEstudio);
  }

  public editarEstudio(id:number, estudio: Estudio): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, estudio);
  }

  public eliminarEstudio(id : number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}` )
  }
}
