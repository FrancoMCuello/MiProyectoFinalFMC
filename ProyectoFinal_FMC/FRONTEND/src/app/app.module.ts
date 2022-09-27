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
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Componentes/home/home.component';
import { LoginComponent } from './Componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { WelcomeComponent } from './Componentes/welcome/welcome.component';
import { NewExperienciaComponent } from './Componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './Componentes/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './Componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './Componentes/educacion/editeducacion.component';
import { EditpersonaComponent } from './Componentes/acerca-de/editpersona.component';
import { EdithysComponent } from './Componentes/hys/edithys.component';
import { NewHysComponent } from './Componentes/hys/newhys.component';





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
    HomeComponent,
    LoginComponent,
    WelcomeComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditpersonaComponent,
    EdithysComponent,
    NewHysComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],

  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
