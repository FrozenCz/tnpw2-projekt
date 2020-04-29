import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from '../recipe.service';
import {Recipe} from "../../../../../shared/recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  onlyUser = false;
  recipes: Recipe[] = [];

  constructor(private route: ActivatedRoute, public recipeService: RecipeService) {
    route.data.subscribe((data) => {
      if(data && data.onlyUser === true){
        this.onlyUser = true;
        this.recipeService.getUserRecipes().then(
          (recipes) => {
            this.recipes = recipes;
          }
        )
      }else{
        this.recipeService.getRecipes().then(
          (recipes) => {
            this.recipes = recipes;
          }
        )
      }
    })
  }
}
