import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/entity/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectosList: Proyecto[] = [];
  nombre: string = '';
  fecha: string = '';
  descripcion: string = '';
  url: string = '';
  isLogged=false; 
  form: FormGroup;

  constructor(private sProyecto: ProyectoService, private tokenService:TokenService, private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group(
      {
        nombre: ['', Validators.required],
        fecha: ['', Validators.required],
        descripcion: ['', Validators.required],
        url: ['', Validators.required]

      }
    )

   }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else {
      this.isLogged =false;
    }
    this.mostrarProyectos();
  }

  mostrarProyectos(): void {
    this.sProyecto.verProyectos().subscribe(data => (this.proyectosList = data))
  }

  nuevoProyecto(): void {
    const proy = new Proyecto(this.nombre, this.fecha, this.descripcion, this.url);
    this.sProyecto.crearProyecto(proy).subscribe(
      data => {
        alert("Nuevo proyecto cargado correctamente")
        window.location.reload();
      }, err => {
        alert("Falló la carga de datos, se deben completar todos los campos requeridos");
        
      }
    )
  }

  borrarProyecto(id: number | undefined): void {
    if (id != undefined && confirm("¿Desea eliminar este elemento?")) { this.sProyecto.eliminarProyecto(id).subscribe(data => (this.mostrarProyectos())) }
  }

  get Nombre() {
    return this.form.get('nombre')
  }

  get Fecha() {
    return this.form.get('fecha')
  }

  get Descripcion() {
    return this.form.get('descripcion')
  }

  get Url() {
    return this.form.get('url')
  }
}
