
//import { RegistroComponent } from './components/registro/registro.component';
//import { QuiensoyComponent } from './components/quiensoy/quiensoy.component';
//import { HomeComponent } from './components/home/home.component';
import { PagesModule } from './pages/pages.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  //{path: '', component: HomeComponent},
  {path: 'pages', loadChildren: ()=> import('./pages/pages.module').then(m=>m.PagesModule)},
  {path: 'components', loadChildren: ()=> import('./components/components.module').then(m=>m.ComponentsModule)},
  {path: '**', redirectTo: 'pages/home', pathMatch: 'full'},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
