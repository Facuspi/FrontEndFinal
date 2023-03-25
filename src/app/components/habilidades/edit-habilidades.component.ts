import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fortaleza } from 'src/app/entity/fortaleza';
import { FortalezaService } from 'src/app/servicios/fortaleza.service';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.css']
})
export class EditHabilidadesComponent implements OnInit {
  form: FormGroup;
  habilidad: Fortaleza = null;

  constructor(private sHabilidades: FortalezaService, private formBuilder: FormBuilder, private activatedRouter: ActivatedRoute, private router: Router) {
    this.form = this.formBuilder.group(
      {
        habilidad: ['', Validators.required],
        porcentaje: ['', Validators.required],
      }
    )
   }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidades.verFortaleza(id).subscribe(
      data =>{
       this.habilidad = data;
      }, err =>{
        alert("Falló la modificacion de datos");
      }
    )
  }

  editarHabilidad(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidades.editarFortaleza(id,this.habilidad).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Falló la modificacion de datos");
      }
    )
  }

  get Habilidad(){
    return this.form.get('habilidad')
  }

  get Porcentaje(){
    return this.form.get('porcentaje')
  }

}
