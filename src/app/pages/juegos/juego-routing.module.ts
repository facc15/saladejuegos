import { JuegosComponent } from './../juegos/juegos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',
children:[
  {path:'lista', component: JuegosComponent}
]},
{path: 'ahorcado', loadChildren: ()=> import('./ahorcado/ahorcado.module').then(m=>m.AhorcadoModule)},
{path: 'mayor-menor', loadChildren: ()=> import('./mayor-menor/mayor-menor.module').then(m=>m.MayorMenorModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegoRoutingModule { }
