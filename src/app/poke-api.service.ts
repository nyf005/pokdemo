import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=964';
  pokemon: Pokemon;
  pokemons: Pokemon[];
  
  constructor(
    public http: HttpClient
  ) { }

  getPokemons() {
    return this.http.get(this.API_URL);
  }
 
  getPokemonInfos(id) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }


}
