import { Jugador } from './../../../interfaces/jugador';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  @Input() listaResultados!: Jugador[];
  public listaOrdenada!: Jugador[];
  @Input() esPokemon!: boolean;
  @Output() cerrado= new EventEmitter<boolean>();

  public spinner: boolean=false;

  constructor() { }

  ngOnInit(): void {
    this.spinner=true;

    setTimeout(() => {
      if(this.listaResultados.length>0)
      {

        if(!this.esPokemon)
        {

          this.listaResultados.sort((a,b)=>{
             if(a.puntaje>b.puntaje)
             {
              return -1;
             }else if(a.puntaje<b.puntaje)
             {
              return 1;
             }else{
              return 0;
             }
          });
        }else{
          this.listaResultados.sort((a,b)=>{
            if(a.victorias>b.victorias)
            {
             return -1;
            }else if(a.victorias<b.victorias)
            {
             return 1;
            }else{
             return 0;
            }
         });

        }


      }
    this.spinner=false;
      this.listaOrdenada=this.listaResultados;
    }, 4000);


  }

  cerrar()
  {
    this.cerrado.emit(false);
  }
}
