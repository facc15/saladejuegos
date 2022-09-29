
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [NavbarComponent,SpinnerComponent, CarouselComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: [NavbarComponent,SpinnerComponent,CarouselComponent]
})
export class ComponentsModule { }
