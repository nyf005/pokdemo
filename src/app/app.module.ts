import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; 

import { AppComponent } from './app.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { FilterPokemonPipe } from './filter-pokemon.pipe';
import { PokeApiService } from './poke-api.service';
import { PokemonDataService } from './pokemon-data.service';
import { PokemonInfosComponent } from './components/pokemon-infos/pokemon-infos.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FilterPokemonPipe,
    PokemonInfosComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [PokeApiService, PokemonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
