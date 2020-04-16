import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../shared/auth.service";
import {UserModel} from "../../users/userModel";

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
