import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../entity/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url= 'https://backendfinal-8vqp.onrender.com/experiencia/'

  constructor(private httpClient:HttpClient) { }

  public verExperiencias(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }

  public verExperiencia(id : number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.url + `ver/${id}`);
  }

  public crearExperiencia(nuevaExperiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', nuevaExperiencia);
  }

  public editarExperiencia(id : number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, experiencia);
  }

  public eliminarExperiencia(id : number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}` )
  }
}
