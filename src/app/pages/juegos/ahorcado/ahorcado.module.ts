import { JuegoModule } from './../juego.module';
import { FormsModule } from '@angular/forms';
import { AhorcadoComponent } from './ahorcado.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AhorcadoRoutingModule } from './ahorcado-routing.module';


@NgModule({
  declarations: [AhorcadoComponent],
  imports: [
    CommonModule,
    AhorcadoRoutingModule,
    FormsModule,
    JuegoModule
  ]
})
export class AhorcadoModule { }
