import { RegistroComponent } from './components/registro/registro.component';
import { QuiensoyComponent } from './components/quiensoy/quiensoy.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'quiensoy', component: QuiensoyComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
  //{path:'**', component: ErrorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
