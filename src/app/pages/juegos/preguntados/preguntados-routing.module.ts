import { PreguntadosComponent } from './preguntados.component';
import { PreguntadosModule } from './preguntados.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', children:[ {path:'', component: PreguntadosComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreguntadosRoutingModule { }
