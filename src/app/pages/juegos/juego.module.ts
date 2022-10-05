


import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegoRoutingModule } from './juego-routing.module';
import { JuegosComponent } from './../juegos/juegos.component';
import { ResultadosComponent } from './resultados/resultados.component';


@NgModule({
  declarations: [
    JuegosComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    JuegoRoutingModule,
    ComponentsModule,

  ],
  exports:[JuegosComponent,ResultadosComponent]
})
export class JuegoModule { }
