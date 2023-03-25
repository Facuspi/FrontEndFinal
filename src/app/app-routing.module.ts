import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDatospersComponent } from './components/datos-personales/edit-datospers.component';
import { EditEstudiosComponent } from './components/estudios/edit-estudios.component';
import { EditExpeComponent } from './components/experiencia-laboral/edit-expe.component';
import { EditHabilidadesComponent } from './components/habilidades/edit-habilidades.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'editarExpLab/:id', component: EditExpeComponent},
  {path: 'editarPers/:id', component: EditDatospersComponent},
  {path: 'editarEst/:id', component: EditEstudiosComponent},
  {path: 'editarHab/:id', component: EditHabilidadesComponent},
  {path: 'editarProy/:id', component: EditProyectosComponent}
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
