import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../partner.service';
import { Partners } from '../interfaces/partners';
import { RecipeService } from '../recipe.service';
import { recipes } from '../interfaces/recipes';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stores: Partners[] = [];
  foods: recipes[] = [];

  constructor(
    private service: PartnerService,
    private foodse: RecipeService
  ) { }
  ngOnInit(): void {
      this.getstores();
      this.getrecipies();
  }

  getstores(): void{
    this.service.getPartners().subscribe(stores => this.stores = stores.slice(1,5));
  }
  getrecipies(): void{
    this.foodse.getRecipes().subscribe(food => this.foods = food.slice(1,5));
  }

}
