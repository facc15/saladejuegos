

import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegoRoutingModule } from './juego-routing.module';
import { JuegosComponent } from './../juegos/juegos.component';


@NgModule({
  declarations: [
    JuegosComponent
  ],
  imports: [
    CommonModule,
    JuegoRoutingModule,
    ComponentsModule,
  ],
  exports:[JuegosComponent]
})
export class JuegoModule { }
