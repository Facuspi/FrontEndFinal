import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/entity/persona';
import { ImagenesService } from 'src/app/servicios/imagenes.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-edit-datospers',
  templateUrl: './edit-datospers.component.html',
  styleUrls: ['./edit-datospers.component.css']
})
export class EditDatospersComponent implements OnInit {
  form: FormGroup;
  persona : Persona = null;

  constructor( private formBuilder : FormBuilder, private sPersona: PersonaService, private activatedRouter: ActivatedRoute, private router: Router, public imagenService: ImagenesService) {

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
    
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.verPersona(id).subscribe(
      data =>{
       this.persona = data;
      }, err =>{
        alert("Falló la modificacion de datos");
      }
    )
  }

  editarPersona(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.urlFoto = this.imagenService.urlPerfil
    
    this.sPersona.editarPersona(id,this.persona).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Falló la modificacion de datos");
      }
    )
  }

  subirFotoPerfil($event : any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imagenService.subirFotoPerfil($event,name)
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
