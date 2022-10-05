import { JuegoModule } from './../juego.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';


@NgModule({
  declarations: [
    PokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    JuegoModule
  ]
})
export class PokemonModule { }
