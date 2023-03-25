import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditExpeComponent } from './components/experiencia-laboral/edit-expe.component';
import { EditDatospersComponent } from './components/datos-personales/edit-datospers.component';
import { EditEstudiosComponent } from './components/estudios/edit-estudios.component';
import { EditHabilidadesComponent } from './components/habilidades/edit-habilidades.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { FooterComponent } from './components/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    DatosPersonalesComponent,
    ExperienciaLaboralComponent,
    EstudiosComponent,
    HabilidadesComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent,
    EditExpeComponent,
    EditDatospersComponent,
    EditEstudiosComponent,
    EditHabilidadesComponent,
    EditProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
