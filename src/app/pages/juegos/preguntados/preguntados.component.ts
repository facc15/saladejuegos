import { Jugador } from './../../../interfaces/jugador';
import { ResultadosService } from './../../../servicios/resultados.service';
import { Ligas } from './../../../interfaces/ligas';
import { PreguntadosService } from '../../../servicios/preguntados.service';
import { Component, OnInit } from '@angular/core';
import { Preguntados } from 'src/app/clases/preguntados';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  public juego: string='Preguntados';
  public comienza: boolean=false;
  public terminado: boolean= false;
  public spinner: boolean=false;
  public nombre!: string;
  public numero!: number;
  public infoLigas!: Ligas[];
  public jugador!: any;
  public barcelona!: any;
  public alemania!: any;
  public inglaterra!: any;
  public opcion1!: string;
  public opcion2!: string;
  public opcion3!: string;
  public opcion4!: string;
  public puntaje!: number;
  public cantidad!: number;
  public preguntasAnteriores!: number[];

  public puntajes: boolean=false;
  public jugadores: Jugador[]=[];

  public pregunta!: Preguntados;
private preguntas: Preguntados[]=[];
  constructor(private pregService: PreguntadosService,private resultados: ResultadosService)
  {

  }

  ngOnInit(): void {
    this.traerApi();
  }

  comenzarJuego(){
    this.spinner=true;
    this.cantidad=0;
    this.preguntasAnteriores=[];
    this.puntaje=0;
    this.terminado=false;
    setTimeout(() => {
      this.cargarPreguntas();
      this.comienza=true;
      this.spinner=false;
    }, 1300);


  }

  cargarPreguntas()
{
  this.preguntas.push(new Preguntados('Quién fue el campeón de la Copa Sudaméricana 2021?','Independiente','San Lorenzo','Peñarol','Athetico Paranaense',4,this.infoLigas[10].league_logo));
  this.preguntas.push(new Preguntados('Quién fue el campeón de la Copa América USA 2016?','Argentina','Chile','Brasil','México',2,this.infoLigas[4].league_logo));
  this.preguntas.push(new Preguntados('Cuáles de estos equipos NO juega en la Primera B Nacional?','San Telmo','Quilmes','Berazategui','Atlanta',3,this.infoLigas[125].league_logo));
  this.preguntas.push(new Preguntados('En qué equipo NO jugó Cristiano Ronaldo?','Benfica','Real Madrid','Manchester United','Juventus',1,this.jugador.result[0].player_image));
  this.preguntas.push(new Preguntados('Cuántas Champions League tiene el Barcelona?','2','3','5','4',3,this.barcelona.result[0].team_logo));
  this.preguntas.push(new Preguntados('Cuál es el nombre de pila de Piqué?','Juan','Erik','Eduardo','Gerard',4,this.barcelona.result[0].players[4].player_image));
  this.preguntas.push(new Preguntados('En qué año Inglaterra ganó la copa del mundo?','1966','1972','1960','1990',1,this.inglaterra.result[0].team_logo));
  this.preguntas.push(new Preguntados('Cómo se apellida este jugador?','Phillips','Kane','Owen','Jhonson',2,this.inglaterra.result[0].players[23].player_image));
  this.preguntas.push(new Preguntados('Cuál fue el último mundial ganado por Alemania?','2018','2010','2014','2006',3,this.alemania.result[0].team_logo));
  this.preguntas.push(new Preguntados('Cuántos mundiales jugó Muller?','2','3','4','5',2,this.alemania.result[0].players[21].player_image));

  this.numero= Math.floor(Math.random() * (9-0) + 0);
  this.preguntasAnteriores.push(this.numero);
  this.pregunta=this.preguntas[this.numero];
}

randomPreguntas()
{
  let esta;

  setTimeout(() => {
   this.opcion1="rgb(161, 220, 235)";
   this.opcion2="rgb(161, 220, 235)";
   this.opcion3="rgb(161, 220, 235)";
   this.opcion4="rgb(161, 220, 235)";

   do{
    esta=false;
    this.numero= Math.floor(Math.random() * (10-0) + 0);


    for(let item of this.preguntasAnteriores)
    {

      if(item==this.numero)
      esta=true;

    }

  }while(esta);

    this.preguntasAnteriores.push(this.numero);
    this.pregunta=this.preguntas[this.numero];

  }, 500);
}

elegir(eleccion: number)
{
this.cantidad++;
  switch (eleccion) {
    case 1:
        if(this.pregunta.correcta==eleccion)
        {
          this.opcion1='#28b415';
          this.puntaje++;
        }
        else
        {
          this.opcion1='rgb(133, 9, 9)';
        }

      break;
    case 2:
      if(this.pregunta.correcta==eleccion)
      {
        this.opcion2='#28b415';
        this.puntaje++;
      }
      else
      {
        this.opcion2='rgb(133, 9, 9)';
      }

      break;
    case 3:
      if(this.pregunta.correcta==eleccion)
      {
        this.opcion3='#28b415';
        this.puntaje++;
      }
      else
      {
        this.opcion3='rgb(133, 9, 9)';
      }

      break;
    case 4:
      if(this.pregunta.correcta==eleccion)
      {
        this.opcion4='#28b415';
        this.puntaje++;
      }
      else
      {
        this.opcion4='rgb(133, 9, 9)';
      }
      break;
  }
  if(this.cantidad==8)
  {
    this.terminado=true;
    this.comienza=false;
    this.resultados.guardarResultado(this.juego,this.puntaje);

  }

 this.randomPreguntas();
}



  traerApi()
  {
     this.pregService.traerLigas().subscribe((res)=>
      {
       this.infoLigas=res;

      }

      );

      this.pregService.traerCristiano().subscribe((res)=>{
        this.jugador=res;
      });

      this.pregService.traerBarcelona().subscribe((res)=>{
        this.barcelona=res;
      })

      this.pregService.traerInglaterra().subscribe((res)=>{
        this.inglaterra=res;
      })

      this.pregService.traerAlemania().subscribe((res)=>{
        this.alemania=res;

      })

  }


  traerPuntajes()
  {
    this.puntajes=true;
    this.resultados.traerResultados(this.juego).subscribe(res=>{
      this.jugadores=res;

    });
  }

  cerrandoResultados(cerrando: boolean)
  {
    this.puntajes=cerrando;
  }




}
