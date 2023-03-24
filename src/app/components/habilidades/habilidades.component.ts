import { Component, OnInit } from '@angular/core';
import { Fortaleza } from 'src/app/entity/fortaleza';
import { FortalezaService } from 'src/app/servicios/fortaleza.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidadesList: Fortaleza[] = [];
  nombre: string = '';
  porcentaje: number = 0;
  isLogged=false;

  constructor(private sHabilidades: FortalezaService, private tokenService:TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else {
      this.isLogged =false;
    }
    this.mostrarHabilidades();
  }

  mostrarHabilidades(): void {
    this.sHabilidades.verFortalezas().subscribe(data => (this.habilidadesList = data))
  }

  nuevaHabilidad(): void {
    const hab = new Fortaleza(this.nombre, this.porcentaje);
    this.sHabilidades.crearFortaleza(hab).subscribe(
      data => {
        alert("Nueva habilidad cargada correctamente")
        window.location.reload();
      }, err => {
        alert("Falló la carga de datos");
        window.location.reload();
      }
    )
  }

  borrarHabilidad(id: number | undefined): void {
    if (id != undefined && confirm("¿Desea eliminar este elemento?")) { this.sHabilidades.eliminarFortaleza(id).subscribe(data => (this.mostrarHabilidades())) }
  }
}
