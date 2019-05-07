import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../../pokemon";
import { PokeApiService } from "../../poke-api.service";
import { PokemonDataService } from "../../pokemon-data.service";

@Component({
  selector: "app-pokemon-infos",
  templateUrl: "./pokemon-infos.component.html",
  styleUrls: ["./pokemon-infos.component.css"]
})
export class PokemonInfosComponent implements OnInit {
  pokemons: Pokemon[];
  pokemon: Pokemon;
  private API_URL = "https://pokeapi.co/api/v2/pokemon/";

  constructor(
    private pokeApiService: PokeApiService,
    private pokemonDataService: PokemonDataService
  ) {
    this.pokemons = [];
    this.pokeApiService.getPokemons().subscribe(pokeData => {
      pokeData["results"].map(pokemon => {
        this.pokemons.push({
          id: pokemon.url.slice(this.API_URL.length, pokemon.url.length - 1),
          name: pokemon.name
        });
      });
    });
  }

  ngOnInit() {
    this.pokemonDataService.id.subscribe(id => {
      this.pokeApiService.getPokemonInfos(id).subscribe(pokemonInfos => {
        this.pokemons.map(pokemon => {
          if (pokemon.id == pokemonInfos["id"]) {
            pokemon.height = pokemonInfos["height"];
            pokemon.weight = pokemonInfos["weight"];
            pokemon.base_experience = pokemonInfos["base_experience"];
            pokemon.stats = pokemonInfos["stats"];
            pokemon.img = pokemonInfos["sprites"];

            this.pokemon = pokemon;
          }
        });
      });
    });
  }
}
