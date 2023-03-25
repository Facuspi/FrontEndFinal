import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../entity/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  url= 'http://localhost:8080/proyecto/'

  constructor(private httpClient:HttpClient) { }

  public verProyectos(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.url + 'lista');
  }

  public verProyecto(id : number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.url + `ver/${id}`);
  }

  public crearProyecto(nuevoProyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', nuevoProyecto);
  }

  public editarProyecto(id:number, proyecto: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, proyecto);
  }

  public eliminarProyecto(id : number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}` )
  }
}
