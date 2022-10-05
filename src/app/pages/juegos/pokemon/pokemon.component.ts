import { Jugador } from './../../../interfaces/jugador';
import { ResultadosService } from './../../../servicios/resultados.service';
import { Pokemon, Movimiento } from './../../../clases/pokemon';
import { PokemonService } from './../../../servicios/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  public juego: string= 'Pokemon';
  public comienza!: boolean;
  public terminado!: boolean;
  public spinner!: boolean;
  public victorias: number=0;
  public derrotas: number=0;
  public yaJugo!: boolean;

  public charmander!: Pokemon;
  public squirtle!: Pokemon;
  public bulbasaur!: Pokemon;
  public pokemonElegido!: Pokemon;
  public pokemones: Pokemon[]=[];
  public rival!: Pokemon;
  public caterpie!: Pokemon;
  public pidgey!: Pokemon;
  public rattata!: Pokemon;
  public pikachu!: Pokemon;
  public abra!: Pokemon;
  public koffing!: Pokemon;
  public mankey!: Pokemon;
  public poliwag!: Pokemon;

  public gana!: boolean;
  public informe!: string;
  public informeRival!: string;
  public puntajes: boolean;

  public jugadores: Jugador[]=[];

  constructor(private pokemonService: PokemonService,private resultados: ResultadosService) {
    this.puntajes=false;
    this.yaJugo=false;
  }

  ngOnInit(): void {


    this.cargarPokemones();
  }

  cargarPokemones()
  {
    this.charmander=new Pokemon('charmander',100,new Movimiento('Ascuas',30),new Movimiento('Lanzallamas',40),new Movimiento('Cabezazo',20),new Movimiento('Arañazo',10));
    this.squirtle=new Pokemon('squirtle',100,new Movimiento('Bomba de agua',30),new Movimiento('Golpe de caparazón',20),new Movimiento('Embestida',20),new Movimiento('Lagrima',10));
    this.bulbasaur=new Pokemon('bulbasaur',100,new Movimiento('Látigo cepa',20),new Movimiento('Hierbas',30),new Movimiento('Cabezazo',20),new Movimiento('Embestida',10));
    this.caterpie=new Pokemon('caterpie',100,new Movimiento('Picadura',10),new Movimiento('Disparo demora',20),new Movimiento('Cabezazo',10),new Movimiento('Embestida',10));
    this.pidgey=new Pokemon('pidgey',100,new Movimiento('Ataque rápido',20),new Movimiento('Tornado',30),new Movimiento('Placaje',35),new Movimiento('Vientos',20));
    this.rattata=new Pokemon('rattata',100,new Movimiento('Mordisco',40),new Movimiento('Arañazo',20),new Movimiento('Cabezazo',30),new Movimiento('Embestida',20));
    this.pikachu=new Pokemon('pikachu',100,new Movimiento('Impactrueno',40),new Movimiento('Gruñido',10),new Movimiento('Ataque rapido',15),new Movimiento('Onda trueno',50));
    this.abra=new Pokemon('abra',100,new Movimiento('Psicoonda',40),new Movimiento('Psíquico',50),new Movimiento('Derribo',10),new Movimiento('Golpe al cuerpo',30));
    this.koffing=new Pokemon('koffing',100,new Movimiento('Gas venenoso',20),new Movimiento('Niebla',25),new Movimiento('Pantalla de humo',30),new Movimiento('Explosión',40));
    this.mankey=new Pokemon('mankey',100,new Movimiento('Placaje',20),new Movimiento('Patada baja',30),new Movimiento('Arañazo',10),new Movimiento('Golpes furia',40));
    this.poliwag=new Pokemon('poliwag',100,new Movimiento('Hipnosis',40),new Movimiento('Burbuja',10),new Movimiento('Pistola de agua',20),new Movimiento('Bofetón',10));



    this.pokemones.push(this.charmander);
    this.pokemones.push(this.squirtle);
    this.pokemones.push(this.bulbasaur);
    this.pokemones.push(this.caterpie);
    this.pokemones.push(this.pidgey);
    this.pokemones.push(this.rattata);
    this.pokemones.push(this.pikachu);
    this.pokemones.push(this.abra);
    this.pokemones.push(this.koffing);
    this.pokemones.push(this.mankey);
    this.pokemones.push(this.poliwag);


    for(let item of this.pokemones)
    {
      this.pokemonService.traerPokemon(item.nombre).subscribe((res: any)=>{
        item.path=res.sprites.other.dream_world.front_default;
      });
    }

  }

  elegirpokemon(pokemonElegido: Pokemon)
  {
    this.comienza=true;
    this.terminado=false;
    this.pokemones=[];
    this.informe="";
    this.gana=false;
    this.informeRival="";
    this.pokemonElegido=pokemonElegido;
    this.cargarPokemones();
    this.rival=this.traerRival();
  }

  traerRival()
  {
      let poke= Math.floor(Math.random() * (11-0) + 0);
      return this.pokemones[poke];

  }
  atacar(movimiento: number)
  {
    setTimeout(() => {

      switch (movimiento) {
        case 1:
            this.rival.vida=this.rival.vida-this.pokemonElegido.movimiento1.poder;
            this.informe=this.pokemonElegido.nombre+' ha utilizado '+this.pokemonElegido.movimiento1.nombre;

          break;
        case 2:
          this.rival.vida=this.rival.vida-this.pokemonElegido.movimiento2.poder;
          this.informe=this.pokemonElegido.nombre+' ha utilizado '+this.pokemonElegido.movimiento2.nombre;
            break;

        case 3:
          this.rival.vida=this.rival.vida-this.pokemonElegido.movimiento3.poder;
          this.informe=this.pokemonElegido.nombre+' ha utilizado '+this.pokemonElegido.movimiento3.nombre;
            break;
        case 4:
          this.rival.vida=this.rival.vida-this.pokemonElegido.movimiento4.poder;
          this.informe=this.pokemonElegido.nombre+' ha utilizado '+this.pokemonElegido.movimiento4.nombre;
            break;

        default:
          break;
      }
      if(this.rival.vida>0)
      {
        this.atacaRival();
      }else{
        this.gana=true;
        this.terminado=true;
        this.comienza=false;
        this.victorias++;

        if(this.yaJugo)
        this.resultados.actualizarResultadoPokemon(this.gana,this.juego,this.victorias);
        else
        this.resultados.guardarResultadoPokemon(this.juego,this.victorias,this.derrotas);

        this.yaJugo=true;
      }

    }, 800);

  }

  atacaRival()
  {

    setTimeout(() => {
      let movRival= Math.floor(Math.random() * (5-1) + 1);

      switch (movRival) {
        case 1:
          this.pokemonElegido.vida=this.pokemonElegido.vida-this.rival.movimiento1.poder;
          this.informeRival=this.rival.nombre+' ha utilizado '+this.rival.movimiento1.nombre;
        break;
        case 2:
          this.pokemonElegido.vida=this.pokemonElegido.vida-this.rival.movimiento2.poder;
          this.informeRival=this.rival.nombre+' ha utilizado '+this.rival.movimiento2.nombre;
        break;
        case 3:
          this.pokemonElegido.vida=this.pokemonElegido.vida-this.rival.movimiento3.poder;
          this.informeRival=this.rival.nombre+' ha utilizado '+this.rival.movimiento3.nombre;
        break;
        case 4:
          this.pokemonElegido.vida=this.pokemonElegido.vida-this.rival.movimiento4.poder;
          this.informeRival=this.rival.nombre+' ha utilizado '+this.rival.movimiento4.nombre;
        break;

        default:
          break;
      }

      if(this.pokemonElegido.vida<=0)
      {
        this.gana=false;
        this.terminado=true;
        this.comienza=false;
        this.derrotas++;
        if(this.yaJugo)
        this.resultados.actualizarResultadoPokemon(this.gana,this.juego,this.derrotas);
        else
        this.resultados.guardarResultadoPokemon(this.juego,this.victorias,this.derrotas);

        this.yaJugo=true;
      }
      this.informe="";

      setTimeout(() => {
        this.informeRival="";
      }, 900);
    }, 800);

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
