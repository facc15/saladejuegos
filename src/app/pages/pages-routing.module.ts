import { EncuestaComponent } from './encuesta/encuesta.component';
import { LoginModule } from './login/login.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuiensoyComponent } from './quiensoy/quiensoy.component';

const routes: Routes = [
  {path:'', children:[{path:'quien-soy', component: QuiensoyComponent}]},
  {path:'', children:[{path:'encuesta', component: EncuestaComponent}]},
  {path:'', children:[{path:'home', component: HomeComponent}]},
  {path: 'login', loadChildren: ()=> import('./login/login.module').then(m=>m.LoginModule)},
  {path: 'juegos', loadChildren: ()=> import('./juegos/juego.module').then(m=>m.JuegoModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
