import { Component, OnInit } from '@angular/core';
import { RECIPES } from '../data/mock_recipes';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

    recipes = RECIPES;
  constructor() { }

  ngOnInit(): void {
  }

}
