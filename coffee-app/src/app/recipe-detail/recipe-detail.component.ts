import { Component, OnInit } from '@angular/core';
import { recipes } from '../interfaces/recipes';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: recipes |undefined;
  constructor(
    private route: ActivatedRoute,
    private service: RecipeService
  ) { }

  ngOnInit(): void {
    this.getRecipe();
  }
  getRecipe(): void{
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.service.getRecipe(name).subscribe(recipe => this.recipe = recipe);
  }

}
