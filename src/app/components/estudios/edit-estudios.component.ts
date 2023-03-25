import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/entity/estudio';
import { EstudioService } from 'src/app/servicios/estudio.service';

@Component({
  selector: 'app-edit-estudios',
  templateUrl: './edit-estudios.component.html',
  styleUrls: ['./edit-estudios.component.css']
})
export class EditEstudiosComponent implements OnInit {
  form: FormGroup;
  estudio: Estudio = null;

  constructor(private sEstudio: EstudioService, private formBuilder: FormBuilder, private activatedRouter: ActivatedRoute, private router: Router) {
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
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudio.verEstudio(id).subscribe(
      data =>{
       this.estudio = data;
      }, err =>{
        alert("Falló la modificacion de datos");
      }
    )
  }

  editarEstudio(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudio.editarEstudio(id,this.estudio).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Falló la modificacion de datos");
      }
    )
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
