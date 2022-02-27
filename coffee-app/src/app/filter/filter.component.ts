import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  

  constructor(
    private fservice: FilterService,
    private rservice: RecipeService
  ) { }

  ngOnInit(): void {
  }

}
