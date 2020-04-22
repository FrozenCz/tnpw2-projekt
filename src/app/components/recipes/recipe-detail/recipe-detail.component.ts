import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../recipe.service";
import {ActivatedRoute} from "@angular/router";
import {RecipeModel} from "../../../../../shared/recipe.model";
import {AuthService} from "../../dialog/login-dialog/auth.service";
import {UserModel} from "../../../../../shared/userModel";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: RecipeModel;


  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private authService: AuthService) {
    this.recipe = recipeService.getRecipe(+this.route.snapshot.params.id)
  }

  ngOnInit(): void {
  }

  getUser(): UserModel {
    return this.authService.user;
  }

}
