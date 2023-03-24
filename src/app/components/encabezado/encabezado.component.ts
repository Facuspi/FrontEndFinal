import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Persona } from 'src/app/entity/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  isLogged=false;

  datosPersonales: Persona[] = [];


  constructor(private sDatosPersonales: PersonaService, private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else {
      this.isLogged =false;
    }
    this.mostrarDatosPersonales();
  }

  mostrarDatosPersonales(): void {
    this.sDatosPersonales.verPersonas().subscribe(data => (this.datosPersonales = data))
  }

  login(){
    this.router.navigate(['/login'])
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

}
