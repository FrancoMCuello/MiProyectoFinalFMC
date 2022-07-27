import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { LogosComponent } from './Componentes/logos/logos.component';
import { VideoComponent } from './Componentes/video/video.component';
import { AcercaDeComponent } from './Componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './Componentes/hys/hys.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { FooterComponent } from './Componentes/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogosComponent,
    VideoComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],

  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
