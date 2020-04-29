import {AfterViewInit, Injectable, OnInit} from '@angular/core';
import {Recipe} from "../../../../shared/recipe";
import {IngredientModel} from "../../../../shared/ingredient.model";
import {UsersService} from "../users/users.service";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RecipeService{
  constructor(private userService: UsersService, private http:HttpClient) {
  }

  public async getRecipes(): Promise<Recipe[]> {
    return this.http.get('/api/recipes')
      .pipe(
      map((recipes: Recipe[]) => {
        const newRecipes: Recipe[] = []
        recipes.forEach((recipe: Recipe) => {
          newRecipes.push(this.createRecipeFromNest(recipe));
        });
        return newRecipes;
      })
    ).toPromise()
      .then(
        (recipes) => {
          console.log(recipes);
          return recipes;
        }
    )
  }

  public async getUserRecipes(): Promise<Recipe[]>{
    return this.http.get('/api/recipes/user/').pipe(
      map((recipes: Recipe[]) => {
        const newRecipes: Recipe[] = []
        recipes.forEach((recipe: Recipe) => {
          newRecipes.push(this.createRecipeFromNest(recipe));
        });
        return newRecipes;
      })
    ).toPromise()
      .then(
        (recipes) => {
          return recipes;
        }
      )
  }


  public createRecipeFromNest(recipe: Recipe): Recipe {
    const trueIngredients: IngredientModel[] = [];
    if(recipe.ingredients){
      recipe.ingredients.forEach((ingredient) => {
        trueIngredients.push(new IngredientModel(ingredient.name, ingredient.amount, ingredient.amount_type))
      })
    }

    return new Recipe(recipe['_id'], recipe.name, recipe.description, trueIngredients, recipe.isPrivate, recipe.owner, new Date(recipe.date), recipe.imagePath)
  }

  public async getRecipe(recipeId: string): Promise<Recipe> | null {
    return this.http.get('/api/recipes/' + recipeId)
      .pipe(
        map((recipe: Recipe) => {
          if(recipe) return this.createRecipeFromNest(recipe);
        })
      )
      .toPromise()
      .then(
      (recipe: Recipe) => {
        return recipe
      }
    )
  }

  public addRecipe(recipe: Partial<Recipe>): Observable<any>{
    return this.http.post('/api/recipes', {recipe})
  }

  public updateRecipe(updatedRecipe: Recipe, name: string, description: string, ingredients: IngredientModel[] | null, isPrivate: boolean, imagePath: string) {
    updatedRecipe.name = name;
    updatedRecipe.isPrivate = isPrivate;
    updatedRecipe.description = description;
    updatedRecipe.ingredients = ingredients;
    updatedRecipe.imagePath = imagePath;

    return this.http.put<Recipe>('/api/recipes/' + updatedRecipe.id, {recipe: updatedRecipe});
  }

  public deleteRecipe(recipe: Recipe) {
    return this.http.delete('/api/recipes/'+recipe.id)
  }

}
