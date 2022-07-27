import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { LogosComponent } from './Componentes/logos/logos.component';



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
