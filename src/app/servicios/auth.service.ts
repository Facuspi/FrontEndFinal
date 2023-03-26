import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../entity/jwt-dto';
import { LoginUsuario } from '../entity/login-usuario';
import { NuevoUsuario } from '../entity/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
authURL = 'https://backendfinal-8vqp.onrender.com/auth/'

constructor(private httpclient: HttpClient) { }

public nuevo(nuevoUsuario : NuevoUsuario): Observable<any>{
  return this.httpclient.post<any>(this.authURL+'nuevo', nuevoUsuario)
}

public login (loginUsuario: LoginUsuario): Observable<JwtDto>{
  return this.httpclient.post<JwtDto>(this.authURL+'login', loginUsuario)
}
}
