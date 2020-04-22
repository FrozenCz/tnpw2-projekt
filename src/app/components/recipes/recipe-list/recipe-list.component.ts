import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from '../recipe.service';
import {RecipeModel} from "../../../../../shared/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  onlyUser = false;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
    route.data.subscribe((data) => {
      if(data && data.onlyUser === true){
        this.onlyUser = true;
      }else{
        this.onlyUser = false;
      }
    })
  }

  ngOnInit(): void {

  }

  public getRecepies(): RecipeModel[] {
    return this.recipeService.getRecipes(this.onlyUser);
  }

}
