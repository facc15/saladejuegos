import { JuegoModule } from './../juego.module';
import { ComponentsModule } from './../../../components/components.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreguntadosRoutingModule } from './preguntados-routing.module';
import { PreguntadosComponent } from './preguntados.component';


@NgModule({
  declarations: [
    PreguntadosComponent
  ],
  imports: [
    CommonModule,
    PreguntadosRoutingModule,
    FormsModule,
    ComponentsModule,
    JuegoModule
  ]
})
export class PreguntadosModule { }
