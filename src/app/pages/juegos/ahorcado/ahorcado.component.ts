import { Jugador } from './../../../interfaces/jugador';
import { ResultadosService } from './../../../servicios/resultados.service';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  public juego: string='Ahorcado';
  public seJuega: boolean;
  public palabraSecreta!: string[];
  public palabra!: string;
  public letras!: any[];
  public palabras: string[];
  public numero!: number;
  public arrayCaracteres!: string[];
  public gana!: boolean;
  public pierde!: boolean;
  public errores: number;
  public imagenes!: string [];
  public imagen!: string;
  public victorias: number=0;
  public jugadores: Jugador[]=[];
  public puntajes: boolean=false;

  public yaJugo: boolean=false;

  constructor(private router: Router, private resultados: ResultadosService) {
    this.seJuega=false;

    this.palabras= this.cargarPalabras();
    this.palabra="";
    this.palabraSecreta=[];
    this.gana=false;
    this.pierde=false;
    this.errores=0;
    this.imagenes= this.cargarImagenes();
  }

  ngOnInit(): void {

  }

  cargarImagenes()
  {
    return ['../../../../assets/juegos/ahorcado/a1.png','../../../../assets/juegos/ahorcado/a2.png',
    '../../../../assets/juegos/ahorcado/a3.png','../../../../assets/juegos/ahorcado/a4.png',
    '../../../../assets/juegos/ahorcado/a5.png','../../../../assets/juegos/ahorcado/a6.png',
    '../../../../assets/juegos/ahorcado/a7.png'];
  }

  empezarJuego()
  {
    this.imagen=this.imagenes[0];
    this.seJuega=true;
    this.numero= Math.floor(Math.random() * (8-0) + 0);
    this.palabra=this.palabras[this.numero];
    this.letras=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T',
    'U','X','Y','Z'];

    this.arrayCaracteres= Array.from(this.palabra);
    let i=0;
    for(let item of this.arrayCaracteres)
    {
      this.palabraSecreta.push(" _ ");
    }
  }

  letraElegida(letra: string)
  {
    this.letras= this.letras.filter(letri=> letri!= letra);
    let terminado=true;
    let esta=false;
    let index=0;
    for(let item of this.arrayCaracteres)
    {
      if(letra==item)
      {

        this.palabraSecreta[index]=letra;
        esta=true;
      }
      index++;
    }
    index=0;

    for (let item of this.palabraSecreta)
    {
      if(this.palabraSecreta[index]== ' _ ')
      {
        terminado=false;
      }
      index++;
    }

    if(!esta)
    {
      this.errores++;
      this.imagen=this.imagenes[this.errores];
    }

    if(this.errores==6)
    {
      setTimeout(() => {
        this.pierde=true;
        this.gana=false;
        this.seJuega=false;
        if(this.yaJugo)
        this.resultados.actualizarResultado(this.juego,this.victorias);
        else
        this.resultados.guardarResultado(this.juego,this.victorias);


        this.yaJugo=true;
        this.reset();
      }, 800);

    }

    if(terminado)
    {
      setTimeout(() => {
      this.gana=true;
      this.victorias++;
      this.pierde=false;
      this.seJuega=false;


      if(this.yaJugo)
      this.resultados.actualizarResultado(this.juego,this.victorias);
      else
      this.resultados.guardarResultado(this.juego,this.victorias);


      this.yaJugo=true;
      this.reset();
    }, 800);

    }

  }

  reset()
  {
    this.arrayCaracteres=[];
    this.palabra="";
    this.palabraSecreta=[];
    this.errores=0;

  }

  cargarPalabras()
  {
    return ['MANZANA','EDIFICIO','CALEIDOSCOPIO','HIBRIDO','SERENDIPIA','UTOPIA','LAGUNA','LOBO','COMPONENTE'];
  }

  volver()
  {
   this.router.navigateByUrl('pages/juegos/lista');
  }

  traerPuntajes()
  {
    this.puntajes=true;
    this.resultados.traerResultados(this.juego).subscribe(res=>{
      this.jugadores=res;

    });
  }

  cerrando(cierro: boolean)
  {
    this.puntajes=false;
  }

  irAEncuesta()
  {
    this.router.navigateByUrl('pages/encuesta');
  }

}
