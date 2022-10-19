import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatModule } from './../components/chat/chat.module';
import { ComponentsModule } from './../components/components.module';
import { LoginModule } from './login/login.module';
import { QuiensoyComponent } from './../pages/quiensoy/quiensoy.component';
import { JuegosComponent } from './juegos/juegos.component';
import { HomeComponent } from './../pages/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { RespuestasEncuestaComponent } from './respuestas-encuesta/respuestas-encuesta.component';


@NgModule({
  declarations: [
    HomeComponent,
    QuiensoyComponent,
    EncuestaComponent,
    RespuestasEncuestaComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LoginModule,
    ComponentsModule,
    ChatModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [HomeComponent,QuiensoyComponent]
})
export class PagesModule { }
