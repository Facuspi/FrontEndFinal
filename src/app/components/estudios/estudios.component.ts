import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudio } from 'src/app/entity/estudio';
import { EstudioService } from 'src/app/servicios/estudio.service';
import { TokenService } from 'src/app/servicios/token.service';
;

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudiosList: Estudio[] = [];
  titulo: string = '';
  inicio: string = '';
  fin: string = '';
  institucion: string = '';
  isLogged = false;
  form: FormGroup;


  constructor(private sEstudio: EstudioService, private tokenService: TokenService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      {
        titulo: ['', Validators.required],
        desde: ['', Validators.required],
        hasta: ['', Validators.required],
        institucion: ['', Validators.required]

      }
    )
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.mostrarEstudios();

  }

  mostrarEstudios(): void {
    this.sEstudio.verEstudios().subscribe(data => (this.estudiosList = data))
  }

  nuevoEstudio(): void {
    const estu = new Estudio(this.titulo, this.inicio, this.fin, this.institucion);
    this.sEstudio.crearEstudio(estu).subscribe(
      data => {
        alert("Nuevo estudio cargado correctamente")
        window.location.reload();
      }, err => {
        alert("Falló la carga de datos, se deben completar todos los campos requeridos");
        
      }
    )
  }

  borrarEstudio(id: number | undefined): void {
    if (id != undefined && confirm("¿Desea eliminar este elemento?")) { this.sEstudio.eliminarEstudio(id).subscribe(data => (this.mostrarEstudios())) }
  }

  get Titulo() {
    return this.form.get('titulo')
  }

  get Desde() {
    return this.form.get('desde')
  }

  get Hasta() {
    return this.form.get('hasta')
  }

  get Institucion() {
    return this.form.get('institucion')
  }

}
