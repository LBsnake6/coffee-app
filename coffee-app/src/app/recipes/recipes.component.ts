import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { FilterService } from '../filter.service';
import { recipes } from '../interfaces/recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

    recipes: recipes[] = [];
    ingredients: string[] = [];
    selected: string[] = []; 
    temp: recipes[] = [];

  constructor(
    private fservice: FilterService,
    private rservice: RecipeService
  ) { }

  ngOnInit(): void {
   this.getRecipes();
   this.getIng();
   this.getSelect();
   this.getlist();
  }
  getRecipes(): void{
    this.rservice.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

  getSelect(): void{
    this.fservice.getSelect().subscribe(select => this.selected = select);
  }

  addtolist(intr: string){
    this.fservice.addtoCart(intr).subscribe(select => this.selected = select);
  }

  removeFromlist(ints:string): void{
    this.fservice.removeItem(ints).subscribe(select => this.selected = select);
  }
  getIng(): void{
  this.fservice.getIngredient().subscribe(ingredients => this.ingredients = ingredients);
  }

  clear(): void{
    this.fservice.clear().subscribe(select => this.selected = select);
  }
  getlist():void{
    this.temp = this.recipes;
  }
  filter():void{
    this.fservice.filter().subscribe(list => this.temp = list);
  }


}
