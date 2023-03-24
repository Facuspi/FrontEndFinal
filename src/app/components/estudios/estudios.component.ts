import { Component, OnInit } from '@angular/core';
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
  isLogged=false;


  constructor(private sEstudio: EstudioService, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else {
      this.isLogged =false;
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
        alert("Falló la carga de datos");
        window.location.reload();
      }
    )
  }

  borrarEstudio(id: number | undefined): void {
    if (id != undefined && confirm("¿Desea eliminar este elemento?")) { this.sEstudio.eliminarEstudio(id).subscribe(data => (this.mostrarEstudios())) }
  }

}
