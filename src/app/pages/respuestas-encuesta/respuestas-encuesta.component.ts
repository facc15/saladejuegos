import { Router } from '@angular/router';
import { EncuestaService } from './../../servicios/encuesta.service';
import { Component, OnInit } from '@angular/core';
import { Encuestado } from 'src/app/interfaces/encuestado';

@Component({
  selector: 'app-respuestas-encuesta',
  templateUrl: './respuestas-encuesta.component.html',
  styleUrls: ['./respuestas-encuesta.component.css']
})
export class RespuestasEncuestaComponent implements OnInit {
  public encuestados!: Encuestado[];
  public spinner: boolean;

  constructor(private encuestaService: EncuestaService, private router: Router) {
    this.spinner=true;
   }

  ngOnInit(): void {
    this.encuestaService.traerEncuesta().subscribe(res=>{
      this.encuestados=res;
      this.spinner=false;
      console.info(this.encuestados);
    });
  }

  volver()
  {
    this.router.navigateByUrl('pages/home');
  }

}
