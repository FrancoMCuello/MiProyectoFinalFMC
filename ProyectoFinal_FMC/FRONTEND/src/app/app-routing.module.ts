import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EditAcercaDComponent } from './Componentes/acerca-de/edit-acerca-d.component';
import { EditpersonaComponent } from './Componentes/acerca-de/editpersona.component';
import { EditeducacionComponent } from './Componentes/educacion/editeducacion.component';
import { NeweducacionComponent } from './Componentes/educacion/neweducacion.component';
import { EditExperienciaComponent } from './Componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './Componentes/experiencia/new-experiencia.component';
import { HomeComponent } from './Componentes/home/home.component';
import { EditSkillComponent } from './Componentes/hys/edit-skill.component';
import { NewSkillComponent } from './Componentes/hys/new-skill.component';
import { LoginComponent } from './Componentes/login/login.component';
import { WelcomeComponent } from './Componentes/welcome/welcome.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NeweducacionComponent},
  {path: 'editedu/:id', component: EditeducacionComponent},
  {path: 'editper/:id', component: EditpersonaComponent},
  {path: 'editskill/:id', component: EditSkillComponent},
  {path: 'nuevaskill', component: NewSkillComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
