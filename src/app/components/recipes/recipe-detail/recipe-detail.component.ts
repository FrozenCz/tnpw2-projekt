import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../recipe.service";
import {ActivatedRoute} from "@angular/router";
import {Recipe} from "../../../../../shared/recipe";
import {AuthService} from "../../../auth.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  nenalezeno: boolean;
  owner: boolean = false;


  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private authService: AuthService) {
    recipeService.getRecipe(this.route.snapshot.params.id).then(
      (recipe: Recipe) => {
        if(recipe){
          this.recipe = recipe;
          if(this.recipe.owner == this.authService.getUserId()) this.owner = true;
        }
        else this.nenalezeno = true;
      }
    )
  }

  ngOnInit(): void {
  }

  isLogged() {
    return this.authService.isLogged;
  }

}
