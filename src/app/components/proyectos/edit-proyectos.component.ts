import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/entity/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {
  form: FormGroup;
  proyecto: Proyecto = null;

  constructor(private sProyecto: ProyectoService, private formBuilder:FormBuilder, private activatedRouter: ActivatedRoute, private router: Router) {
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
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.verProyecto(id).subscribe(
      data =>{
       this.proyecto = data;
      }, err =>{
        alert("Falló la modificacion de datos");
      }
    )
  }

  editarProyecto(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.editarProyecto(id,this.proyecto).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Falló la modificacion de datos");
      }
    )
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
