import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class PokemonDataService {
  
  id: BehaviorSubject<Number> = new BehaviorSubject(1) ;

  constructor() {
  }

}



