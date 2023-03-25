import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/entity/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-edit-expe',
  templateUrl: './edit-expe.component.html',
  styleUrls: ['./edit-expe.component.css']
})
export class EditExpeComponent implements OnInit {
  expLab: Experiencia = null;
  form: FormGroup;

  constructor(private sExperiencia: ExperienciaService, private activatedRouter: ActivatedRoute, private router: Router, private formBuilder: FormBuilder ) {
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
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.verExperiencia(id).subscribe(
      data =>{
       this.expLab = data;
      }, err =>{
        alert("Falló la modificacion de datos");
      }
    )
  }

  editarExperiencia(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.editarExperiencia(id,this.expLab).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Falló la modificacion de datos");
      }
    )
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
