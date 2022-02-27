import { recipes } from "../interfaces/recipes";
import { RecipesComponent } from "../recipes/recipes.component";

export const RECIPES: recipes[] = [
    {name:"a", time : 5, ingredients: ["f","f","g","c"],instruction: ["make","bake","eat"]},
    {name:"b", time : 5, ingredients: ["f","f","g","a"],instruction: ["make","bake","eat"]},
    {name:"c", time : 5, ingredients: ["f","f","g"],instruction: ["make","bake","eat"]},
    {name:"d", time : 5, ingredients: ["f","f","g"],instruction: ["make","bake","eat"]},
    {name:"e", time : 5, ingredients: ["f","f","g"],instruction: ["make","bake","eat"]},
    {name:"f", time : 5, ingredients: ["f","f","g"],instruction: ["make","bake","eat"]},
    {name:"g", time : 5, ingredients: ["f","f","g"],instruction: ["make","bake","eat"]}
]