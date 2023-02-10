import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fortaleza } from '../entity/fortaleza';

@Injectable({
  providedIn: 'root'
})
export class FortalezaService {

  url= 'http://localhost:8080/fortaleza/'

  constructor(private httpClient:HttpClient) { }

  public verFortalezas(): Observable<Fortaleza[]> {
    return this.httpClient.get<Fortaleza[]>(this.url + 'lista');
  }

  public verFortaleza(id : number): Observable<Fortaleza>{
    return this.httpClient.get<Fortaleza>(this.url + `ver/${id}`);
  }

  public crearFortaleza(nuevaFortaleza: Fortaleza): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', nuevaFortaleza);
  }

  public editarFortaleza(fortaleza: Fortaleza): Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', fortaleza);
  }

  public eliminarFortaleza(id : number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}` )
  }
}
