import { Injectable } from '@angular/core';
import {RecipeModel} from "./recipe.model";
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
    this.recipes.push(new RecipeModel( 0, 'nazev receptu', 'popis receptu', null,  false, {id: 1, email: 'test@test.cz'}, new Date(), 'https://www.ffacademy.cz/wp-content/uploads/2018/07/AdobeStock_68106280-400x300.jpeg'));
    this.recipes.push(new RecipeModel( 1, 'nazev receptu 1', 'popis receptu 1',null,   false, {id: 0, email: 'test@test.cz'}, new Date(), 'https://www.ffacademy.cz/wp-content/uploads/2018/07/AdobeStock_68106280-400x300.jpeg'));
    this.recipes.push(new RecipeModel( 2, 'nazev receptu 2', 'popis receptu 2',null,   false, {id: 1, email: 'test@test.cz'}, new Date(), 'https://www.ffacademy.cz/wp-content/uploads/2018/07/AdobeStock_68106280-400x300.jpeg'));
    this.recipes.push(new RecipeModel( 3, 'nazev receptu 3',  'popis receptu 3',  null, false, {id: 0, email: 'test@test.cz'}, new Date(), 'https://www.ffacademy.cz/wp-content/uploads/2018/07/AdobeStock_68106280-400x300.jpeg'));
  }

  public getRecipes(onlyUser?: boolean): RecipeModel[]{
    //todo: pokud onlyUser, tak z backendu ber jen uzivatele, jinak ber vse
    // bude se to lišit i v vlastnosti isPrivate, pokud jen uzivatele, tak se zobrazi veskere, jinak se zobrazi jen ty co nejsou private!
    if(!onlyUser) return this.recipes;
    return this.recipes.filter((recipe) => recipe.owner.id === this.authService.user.id);
  }



  public getRecipe(recipeId: number): RecipeModel | null {
    return this.recipes.find((recipe) => recipe.id === recipeId)
  }

  public addRecipe(name: string, description: string, ingredients: IngredientModel[] | null, isPrivate: boolean, image: any): Promise<boolean>{
    const recipe = new RecipeModel(this.getFakeId(), name, description, ingredients, isPrivate, {id: this.authService.user.id, email: this.authService.user.email}, new Date(), null);
    //fixme: udelat na server a hlavně nezapomenout na obrazek
    return new Promise<boolean>((resolve, reject) => {
      if(this.recipes.push(recipe)){
        resolve();
      }else{
        reject();
      }
    })
  }

  public updateRecipe(updatedRecipe: RecipeModel, name: string, description: string, ingredients: IngredientModel[] | null, isPrivate: boolean, image: any | null) {
    updatedRecipe.name = name;
    updatedRecipe.isPrivate = isPrivate;
    updatedRecipe.description = description;
    updatedRecipe.ingredients = ingredients;
    //fixme: nezapomenout na obrazek
    return new Promise<boolean>((resolve, reject) => {
        if(true){
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
