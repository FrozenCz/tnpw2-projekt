import { Injectable } from '@angular/core';
import {RecipeModel} from "./recipe.model";
import {UserModel} from "../users/userModel";
import {IngredientModel} from "./ingredient.model";
import {AuthService} from "../../shared/auth.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: RecipeModel[] = [];
  private onlyUser: boolean = false;
  fakeId: number = 10;

  constructor(private authService: AuthService) {
    this.fakeInit();
  }

  private getFakeId(): number {
    this.fakeId++;
    return this.fakeId;
  }

  private fakeInit() {
    this.recipes.push(new RecipeModel( 0, 'nazev receptu', 'popis receptu', null,  false, {id: 1, email: 'test@test.cz'}, new Date()));
    this.recipes.push(new RecipeModel( 1, 'nazev receptu 1', 'popis receptu 1',null,   false, {id: 0, email: 'test@test.cz'}, new Date()));
    this.recipes.push(new RecipeModel( 2, 'nazev receptu 2', 'popis receptu 2',null,   false, {id: 1, email: 'test@test.cz'}, new Date()));
    this.recipes.push(new RecipeModel( 3, 'nazev receptu 3',  'popis receptu 3',  null, false, {id: 0, email: 'test@test.cz'}, new Date()));
  }

  public getRecipes(): RecipeModel[]{
    if(this.onlyUser == false) return this.recipes;
    return this.recipes.filter((recipe) => recipe.owner.id === this.authService.user.id);
  }

  public getRecipe(recipeId: number): RecipeModel | null {
    return this.recipes.find((recipe) => recipe.id === recipeId)
  }

  public addRecipe(name: string, description: string, ingredients: IngredientModel[] | null, isPrivate: boolean): Promise<boolean>{
    const recipe = new RecipeModel(this.getFakeId(), name, description, ingredients, isPrivate, {id: this.authService.user.id, email: this.authService.user.email}, new Date() );
    //fixme: udelat na server
    return new Promise<boolean>((resolve, reject) => {
      if(this.recipes.push(recipe)){
        resolve();
      }else{
        reject();
      }
    })
  }

  setOnlyUserRecipes(b: boolean) {
    this.onlyUser = b;
  }
}
