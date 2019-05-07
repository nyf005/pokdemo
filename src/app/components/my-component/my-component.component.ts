import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../../pokemon";
import { FilterPokemonPipe } from "../../filter-pokemon.pipe";
import { PokeApiService } from "../../poke-api.service";
import { PokemonDataService } from "../../pokemon-data.service";

@Component({
  selector: "app-my-component",
  templateUrl: "./my-component.component.html",
  styleUrls: ["./my-component.component.css"]
})
export class MyComponentComponent implements OnInit {
  id: String = "";
  searchString: String = "";
  pokemons: Pokemon[];
  pokemon: Pokemon;
  sharedId;
  private API_URL = "https://pokeapi.co/api/v2/pokemon/";
  p: number = 1;

  constructor(
    private pokeApiService: PokeApiService,
    private pokemonDataService: PokemonDataService
  ) {
    this.pokemons = [];
    this.pokemonDataService.id.subscribe(id => {
      this.sharedId = id;
    })
  }

  ngOnInit() {
    this.getPokemonsList();
  }

  getPokemonsList() {
    this.pokeApiService.getPokemons().subscribe(pokeData => {
      pokeData["results"].map(pokemon => {
        this.pokemons.push({
          id: pokemon.url.slice(this.API_URL.length, pokemon.url.length - 1),
          name: pokemon.name
        });
      });
    });
  }

  setPokemonId(id) {
    this.sharedId = id;
    this.pokemonDataService.id.next(this.sharedId);
  }

  selectPokemon(pokemon){
    this.searchString = pokemon.name;
    this.sharedId = pokemon.id;
  }

  validerChoix = (pokemon: Pokemon) => {
    console.log(pokemon.id);
  };
}
