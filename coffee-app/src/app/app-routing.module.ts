import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { PartnersComponent } from './partners/partners.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'partners', component: PartnersComponent},
  {path: 'recipes', component: RecipesComponent},
  {path: 'home',component:HomeComponent},
  {path: 'recipes/:name', component: RecipeDetailComponent},
  {path: 'location', component: LocationComponent},
  {path: '', redirectTo: '/home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
