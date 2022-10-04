import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private api: string= 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) { }

  traerPokemon(pokemon: string)  {
    return this.http.get(this.api+pokemon);
  }

}
