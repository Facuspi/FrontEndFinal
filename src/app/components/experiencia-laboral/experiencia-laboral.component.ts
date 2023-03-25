import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Experiencia } from 'src/app/entity/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  experienciaList: Experiencia[] = [];
  puesto: string = '';
  empresa: string = '';
  inicio: string = '';
  fin: string = '';
  descripcion: string = '';
  isLogged = false;
  form: FormGroup;


  constructor(private sExperiencia: ExperienciaService, private tokenService: TokenService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      {
        puesto:['', Validators.required],
        empresa:['', Validators.required],
        desde:['', Validators.required],
        hasta:['', Validators.required],
        descripcion:['', Validators.required]
      }
    )
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.mostrarExperiencias();
  }

  mostrarExperiencias(): void {
    this.sExperiencia.verExperiencias().subscribe(
      data => (this.experienciaList = data))
  }

  nuevaExperiencia(): void {
    const expe = new Experiencia(this.puesto, this.empresa, this.inicio, this.fin, this.descripcion);
    this.sExperiencia.crearExperiencia(expe).subscribe(
      data => {
        alert("Nueva experiencia laboral cargada correctamente")
        window.location.reload();
      }, err => {
        alert("Falló la carga de datos, se deben completar todos los campos requeridos");

      }
    )
  }

  borrarExperiencia(id: number | undefined): void {
    if (id != undefined && confirm("¿Desea eliminar este elemento?")) { this.sExperiencia.eliminarExperiencia(id).subscribe(data => (this.mostrarExperiencias())) }
  }

  get Empresa(){
    return this.form.get('empresa')
  }

  get Puesto(){
    return this.form.get('puesto')
  }

  get Desde(){
    return this.form.get('desde')
  }

  get Hasta(){
    return this.form.get('hasta')
  }

  get Descripcion(){
    return this.form.get('descripcion')
  }

}




