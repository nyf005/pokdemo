import { Pipe, PipeTransform } from "@angular/core";
import { Pokemon } from "./pokemon";

@Pipe({
  name: "FilterPokemonPipe"
})
export class FilterPokemonPipe implements PipeTransform {
  // transform(value: any[], property?: string, searchString?: string): any {
  //   if (searchString) {
  //     searchString = searchString.toLowerCase();
  //     return value.filter((e) => {
  //       return e[property].toLowerCase().indexOf(searchString) !== -1;
  //     });
  //   } else {
  //     return [];
  //   }
  // }

  transform(value: Pokemon[], searchString?: string) {
    if (searchString) {
      searchString = searchString.toLowerCase();
      return value.filter(function(el: Pokemon) {
        return (
          el.name.toLowerCase().indexOf(searchString) > -1 ||
          el.id.toLowerCase().indexOf(searchString) > -1
        );
      });
    }
    return value;
  }
}
