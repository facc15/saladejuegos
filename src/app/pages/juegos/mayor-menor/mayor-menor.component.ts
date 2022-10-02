import { Carta } from '../../../clases/carta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent implements OnInit {

  public comienza: boolean=false;
  public sinJugar: boolean=true;
  public mostrarCarta: boolean=false;
  public numero: number=0;
  public cartas: Carta[]=[];
  public carta!: Carta;
  public puntaje: number=0;
  public desactivado: boolean=false;
  public informe: string="";
  public mayor: boolean=false;
  public cartaAnterior!: Carta;
  public intentos!: number;
  public gana: boolean=false;
  public terminado: boolean=false;

  constructor() { }

  ngOnInit(): void {
   this.cargarCartas();
  }



  empezarJuego()
  {
    this.comienza=true;
    this.sinJugar=false;
    this.terminado=false;
    this.informe="";
    this.puntaje=0;
    this.intentos=0;
    this.numero= Math.floor(Math.random() * (47-0) + 0);
    this.carta=this.cartas[this.numero];
  }

  elegirMayorMenor(mayorOmenor: boolean)
  {
    setTimeout(() => {
      this.desactivado=true;
      this.mostrarCarta=true;
      this.mayor=mayorOmenor;
      this.cartaAnterior=this.carta;
    }, 400);

  }

  sacarCarta()
  {

    setTimeout(() => {
      this.numero= Math.floor(Math.random() * (47-0) + 0);
      this.carta=this.cartas[this.numero];
      if(this.mayor)
      {
        if(this.cartaAnterior.valor<this.carta.valor)
        {
          this.puntaje++;
          this.gana=true;
          this.informe="Enhorabuena!!! La carta es mayor, ganaste un punto!";
        }else if(this.cartaAnterior.valor>this.carta.valor)
        {
          this.gana=false;
          this.informe="Uh, te equivocaste. La carta era menor. Inténtalo de nuevo."
        }
      }else if(!this.mayor){

        if(this.cartaAnterior.valor>this.carta.valor)
        {
          this.puntaje++;
          this.gana=true;
          this.informe="Enhorabuena!!! La carta es menor, ganaste un punto!";
        }else if(this.cartaAnterior.valor<this.carta.valor)
        {
          this.gana=false;
          this.informe="Uh, te equivocaste. la carta era mayor. Inténtalo de nuevo."
        }
      }
      if(this.cartaAnterior.valor==this.carta.valor)
      {
        this.gana=false;
        this.informe="Las cartas son iguales, no se suma puntos!";
      }
      this.desactivado=false;

      this.intentos++;

      if(this.intentos==10)
      {
        this.terminado=true;
        this.comienza=false;
      }


    }, 400);



  }

  cargarCartas()
  {
    this.cartas.push(new Carta(1,'../../../../assets/juegos/mayormenor/1e.png'));
    this.cartas.push(new Carta(1,'../../../../assets/juegos/mayormenor/1b.png'));
    this.cartas.push(new Carta(1,'../../../../assets/juegos/mayormenor/1c.png'));
    this.cartas.push(new Carta(1,'../../../../assets/juegos/mayormenor/1o.png'));
    this.cartas.push(new Carta(2,'../../../../assets/juegos/mayormenor/2e.png'));
    this.cartas.push(new Carta(2,'../../../../assets/juegos/mayormenor/2b.png'));
    this.cartas.push(new Carta(2,'../../../../assets/juegos/mayormenor/2c.png'));
    this.cartas.push(new Carta(2,'../../../../assets/juegos/mayormenor/2o.png'));
    this.cartas.push(new Carta(3,'../../../../assets/juegos/mayormenor/3e.png'));
    this.cartas.push(new Carta(3,'../../../../assets/juegos/mayormenor/3b.png'));
    this.cartas.push(new Carta(3,'../../../../assets/juegos/mayormenor/3c.png'));
    this.cartas.push(new Carta(3,'../../../../assets/juegos/mayormenor/3o.png'));
    this.cartas.push(new Carta(4,'../../../../assets/juegos/mayormenor/4e.png'));
    this.cartas.push(new Carta(4,'../../../../assets/juegos/mayormenor/4b.png'));
    this.cartas.push(new Carta(4,'../../../../assets/juegos/mayormenor/4c.png'));
    this.cartas.push(new Carta(4,'../../../../assets/juegos/mayormenor/4o.png'));
    this.cartas.push(new Carta(5,'../../../../assets/juegos/mayormenor/5e.png'));
    this.cartas.push(new Carta(5,'../../../../assets/juegos/mayormenor/5b.png'));
    this.cartas.push(new Carta(5,'../../../../assets/juegos/mayormenor/5c.png'));
    this.cartas.push(new Carta(5,'../../../../assets/juegos/mayormenor/5o.png'));
    this.cartas.push(new Carta(6,'../../../../assets/juegos/mayormenor/6e.png'));
    this.cartas.push(new Carta(6,'../../../../assets/juegos/mayormenor/6b.png'));
    this.cartas.push(new Carta(6,'../../../../assets/juegos/mayormenor/6c.png'));
    this.cartas.push(new Carta(6,'../../../../assets/juegos/mayormenor/6o.png'));
    this.cartas.push(new Carta(7,'../../../../assets/juegos/mayormenor/7e.png'));
    this.cartas.push(new Carta(7,'../../../../assets/juegos/mayormenor/7b.png'));
    this.cartas.push(new Carta(7,'../../../../assets/juegos/mayormenor/7c.png'));
    this.cartas.push(new Carta(7,'../../../../assets/juegos/mayormenor/7o.png'));
    this.cartas.push(new Carta(8,'../../../../assets/juegos/mayormenor/8e.png'));
    this.cartas.push(new Carta(8,'../../../../assets/juegos/mayormenor/8b.png'));
    this.cartas.push(new Carta(8,'../../../../assets/juegos/mayormenor/8c.png'));
    this.cartas.push(new Carta(8,'../../../../assets/juegos/mayormenor/8o.png'));
    this.cartas.push(new Carta(9,'../../../../assets/juegos/mayormenor/9e.png'));
    this.cartas.push(new Carta(9,'../../../../assets/juegos/mayormenor/9b.png'));
    this.cartas.push(new Carta(9,'../../../../assets/juegos/mayormenor/9c.png'));
    this.cartas.push(new Carta(9,'../../../../assets/juegos/mayormenor/9o.png'));
    this.cartas.push(new Carta(10,'../../../../assets/juegos/mayormenor/10e.png'));
    this.cartas.push(new Carta(10,'../../../../assets/juegos/mayormenor/10b.png'));
    this.cartas.push(new Carta(10,'../../../../assets/juegos/mayormenor/10c.png'));
    this.cartas.push(new Carta(10,'../../../../assets/juegos/mayormenor/10o.png'));
    this.cartas.push(new Carta(11,'../../../../assets/juegos/mayormenor/11e.png'));
    this.cartas.push(new Carta(11,'../../../../assets/juegos/mayormenor/11b.png'));
    this.cartas.push(new Carta(11,'../../../../assets/juegos/mayormenor/11c.png'));
    this.cartas.push(new Carta(11,'../../../../assets/juegos/mayormenor/11o.png'));
    this.cartas.push(new Carta(12,'../../../../assets/juegos/mayormenor/12e.png'));
    this.cartas.push(new Carta(12,'../../../../assets/juegos/mayormenor/12b.png'));
    this.cartas.push(new Carta(12,'../../../../assets/juegos/mayormenor/12c.png'));
    this.cartas.push(new Carta(12,'../../../../assets/juegos/mayormenor/12o.png'));

  }
}
