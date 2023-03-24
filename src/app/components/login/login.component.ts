import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/entity/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;
  form: FormGroup;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router, private formBuider:FormBuilder) {
    this.form = this.formBuider.group(
      {
        nombreUsuario:['', Validators.required],
        password:['', Validators.required]
      }
    )

  }

  ngOnInit(): void {
    
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

 
 onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data => {
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate([''])
    }, err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);
      alert("Usuario y/o contraseña incorrectos");
    })

    
  }

  volver(){
    this.router.navigate([''])
  }

  get NombreUsuario(){
    return this.form.get('nombreUsuario')
  }

  get Password(){
    return this.form.get('password')
  }
  

}
