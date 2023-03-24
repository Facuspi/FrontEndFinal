import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/entity/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';
;

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  datosPersonales: Persona[] = [];
  isLogged=false;
  

  constructor(private sDatosPersonales: PersonaService, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else {
      this.isLogged =false;
    }
    this.mostrarDatosPersonales();
    };

    mostrarDatosPersonales(): void {
      this.sDatosPersonales.verPersonas().subscribe(data =>  (this.datosPersonales = data))
    }
  }

