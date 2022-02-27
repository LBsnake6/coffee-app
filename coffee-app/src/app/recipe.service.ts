import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { recipes } from './interfaces/recipes';
import { RECIPES } from './data/mock_recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }
  getRecipe(name:string): Observable<recipes> {
    const recipe = RECIPES.find(r => r.name === name)!;
    return of(recipe);

  }

  getRecipes(): Observable<recipes[]>{
   const recipe = of(RECIPES);
   return recipe;
  }


}
