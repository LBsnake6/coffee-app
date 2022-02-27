import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { recipes } from './interfaces/recipes';
import { RECIPES } from './data/mock_recipes';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  ingredients: string[] = [];
  selected: string[] = [];
  re: recipes | undefined;
  temp: recipes[] = [];
  
  constructor(private service: RecipeService) {}

  addtoCart(ingredient: string): Observable<string[]>{
    if(!this.selected.includes(ingredient)){
    this.selected.push(ingredient);
    }
    return of(this.selected);
  }
  getSelect(): Observable<string[]>{
    return of(this.selected);
  }
  getIngredient(): Observable<string[]> {
    this.fillList();
    return of(this.ingredients);
  }
  clear(): Observable<string[]>{
    this.selected = [];
    return of(this.selected);
  }

  removeItem(ingredient: string): Observable<string[]>{
    var i = this.selected.indexOf(ingredient);
    delete this.selected[i];
    return of(this.selected);

  }

  fillList(){
    for(this.re of RECIPES){
      for(var i of this.re.ingredients){
        if(!this.ingredients.includes(i)){
          this.ingredients.push(i);
        }
      }
    }
  }
  filter(): Observable<recipes[]>{
    this.temp = [];
    if(this.selected.length != 0){
      for(var r of RECIPES){
        for(var s of r.ingredients){
          if(this.selected.includes(s)){
            this.temp.push(r);
            break;
        }
      }
    }
  }
  return of(this.temp);
  }


}
