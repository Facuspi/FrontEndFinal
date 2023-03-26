import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../entity/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url= 'https://backendfinal-8vqp.onrender.com/persona/'

  constructor(private httpClient:HttpClient) { }

  public verPersonas(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.url + 'lista');
  }

  public verPersona(id : number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.url + `ver/${id}`);
  }

  public crearPersona(nuevaPersona: Persona): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', nuevaPersona);
  }

  public editarPersona(id:number, persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, persona);
  }

  public eliminarPersona(id : number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}` )
  }
}
