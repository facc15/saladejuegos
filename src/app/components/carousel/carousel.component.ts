import { Router } from '@angular/router';
import { Juegos } from './../../interfaces/juegos';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }

  irAAhorcado()
  {
  this.router.navigateByUrl('pages/juegos/ahorcado');
  }

  irAMayorMenor()
  {
    this.router.navigateByUrl('pages/juegos/mayor-menor');
  }

  irAPreguntados()
  {

  }

  irACazaAliens()
  {

  }



}
