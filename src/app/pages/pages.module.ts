import { ChatModule } from './../components/chat/chat.module';
import { ComponentsModule } from './../components/components.module';
import { LoginModule } from './login/login.module';
import { QuiensoyComponent } from './../pages/quiensoy/quiensoy.component';
import { JuegosComponent } from './juegos/juegos.component';
import { HomeComponent } from './../pages/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    QuiensoyComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LoginModule,
    ComponentsModule,
    ChatModule
  ],
  exports: [HomeComponent,QuiensoyComponent]
})
export class PagesModule { }
