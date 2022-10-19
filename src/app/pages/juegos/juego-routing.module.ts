import { JuegosComponent } from './../juegos/juegos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

const routes: Routes = [
  {path:'',
children:[
  {path:'lista', component: JuegosComponent, canActivate:[AngularFireAuthGuard]}
]},
{path: 'ahorcado', loadChildren: ()=> import('./ahorcado/ahorcado.module').then(m=>m.AhorcadoModule)},
{path: 'mayor-menor', loadChildren: ()=> import('./mayor-menor/mayor-menor.module').then(m=>m.MayorMenorModule)},
{path: 'preguntados', loadChildren: ()=> import('./preguntados/preguntados.module').then(m=>m.PreguntadosModule)},
{path: 'pokemon', loadChildren: ()=> import('./pokemon/pokemon.module').then(m=>m.PokemonModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegoRoutingModule { }
