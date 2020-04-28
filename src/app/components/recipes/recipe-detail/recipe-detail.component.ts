import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../recipe.service";
import {ActivatedRoute} from "@angular/router";
import {Recipe} from "../../../../../shared/recipe";
import {AuthService} from "../../../auth.service";
import {User} from "../../../../../shared/user";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;


  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private authService: AuthService) {
    this.recipe = recipeService.getRecipe(+this.route.snapshot.params.id)
  }

  ngOnInit(): void {
  }

  isLogged() {
    return this.authService.isLogged;
  }

  userId(): string {
      return 'test';
  }
}
