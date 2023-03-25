import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  form: FormGroup;

  constructor(private sDatosPersonales: PersonaService, private tokenService: TokenService, private formBuilder : FormBuilder) {
    this.form = this.formBuilder.group(
      {
        nombre:['', Validators.required],
        apellido:['', Validators.required],
        posicion:['', Validators.required],
        ciudad:['', Validators.required],
        pais:['', Validators.required],
        urlGitHub:['', Validators.required],
        urlFotoPerfil:['', Validators.required],
        urlBanner:['', Validators.required],
        sobreMi:['', Validators.required]
      }
    )
   }

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

    get Nombre(){
      return this.form.get('nombre')
    }

    get Apellido(){
      return this.form.get('apellido')
    }

    get Posicion(){
      return this.form.get('posicion')
    }

    get Ciudad(){
      return this.form.get('ciudad')
    }

    get Pais(){
      return this.form.get('pais')
    }

    get UrlGitHub(){
      return this.form.get('urlGitHub')
    }

    get UrlFotoPerfil(){
      return this.form.get('urlFotoPerfil')
    }

    get UrlBanner(){
      return this.form.get('urlBanner')
    }

    get SobreMi(){
      return this.form.get('sobreMi')
    }

  }

