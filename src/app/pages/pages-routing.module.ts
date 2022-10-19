import { AdministradorGuard } from '../guards/administrador.guard';
import { RespuestasEncuestaComponent } from './respuestas-encuesta/respuestas-encuesta.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuiensoyComponent } from './quiensoy/quiensoy.component';
import {AngularFireAuthGuard } from '@angular/fire/compat/auth-guard'


const routes: Routes = [
  {path:'', children:[{path:'quien-soy', component: QuiensoyComponent, canActivate:[AngularFireAuthGuard]}]},
  {path:'', children:[{path:'encuesta', component: EncuestaComponent, canActivate:[AngularFireAuthGuard]}]},
  {path:'', children:[{path:'home', component: HomeComponent}]},
  {path:'', children:[{path:'respuestas-encuesta', component: RespuestasEncuestaComponent, canActivate: [AdministradorGuard]}]},
  {path: 'login', loadChildren: ()=> import('./login/login.module').then(m=>m.LoginModule)},
  {path: 'juegos', loadChildren: ()=> import('./juegos/juego.module').then(m=>m.JuegoModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
