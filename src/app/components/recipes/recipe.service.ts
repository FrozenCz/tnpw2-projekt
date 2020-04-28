import { Injectable } from '@angular/core';
import {Recipe} from "../../../../shared/recipe";
import {IngredientModel} from "../../../../shared/ingredient.model";
import {UsersService} from "../users/users.service";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [];
  private onlyUser: boolean = false;

  constructor(private userService: UsersService, private http:HttpClient) {
    this.recipeInit();
  }

  private fakeInit() {
    this.recipes.push(new Recipe( 'as', 'Zapékané brambory', 'Brambory uvaříme ve slupce, oloupeme a nakrájíme na plátky. Šest vajec uvaříme natvrdo, sloupneme a nakrájíme také na plátky Cibuli oloupeme, nakrájíme najemno a zpěníme na másle. Nivu nastrouháme na hrubém struhadle. Fazole necháme okapat. Česnek oloupeme a prolisujeme.\n' +
      '\n' +
      'Připravíme si zálivku. V misce promícháme jogurt se zakysanou smetanou a syrovým vejcem. Vmícháme česnek, červenou mletou papriku a strouhaný parmazán.\n' +
      '\n' +
      'Zapékací mísu vymažeme máslem a vysypeme strouhankou. Poklademe polovinou plátků brambor, vejci a fazolkami. Nyní vše osolíme, opepříme a zasypeme osmaženou cibulkou a pokryjeme druhou polovinou brambor. Vše přelijeme zálivkou a v silně předehřáté troubě zapečeme dorůžova.\n' +
      '\n' +
      'Zapékané brambory s vejci můžeme podávat jako přílohu k pečené drůbeži, ale i jako samostatný pokrm se zeleninovými saláty.\n' +
      '\n' +
      'a', [new IngredientModel('Brambory', 250, 0), new IngredientModel('Vepřová panenka', 500, 0), new IngredientModel('Máslo', 125, 0)],  false, '', new Date(), 'https://data.labuznik.cz/labuznik/images/400x300/18137.jpg?1'));
    this.recipes.push(new Recipe( 'asdasd', 'nazev receptu 1', 'popis receptu 1',null,   false, '', new Date(), 'https://www.ffacademy.cz/wp-content/uploads/2018/07/AdobeStock_68106280-400x300.jpeg'));
    this.recipes.push(new Recipe( 'asda-asda', 'nazev receptu 2', 'popis receptu 2',null,   false, '', new Date(), 'https://www.ffacademy.cz/wp-content/uploads/2018/07/AdobeStock_68106280-400x300.jpeg'));
    this.recipes.push(new Recipe( 'asdasddasda', 'nazev receptu 3',  'popis receptu 3',  null, false, '', new Date(), 'https://www.ffacademy.cz/wp-content/uploads/2018/07/AdobeStock_68106280-400x300.jpeg'));
  }

  private recipeInit(): void {
    this.http.get('/api/recipes').pipe(
      map(recipe => {
        console.log(recipe);
        return recipe;
      })
    ).toPromise()
      .then(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
    )
  }

  public getRecipes(onlyUser?: boolean): Recipe[]{
    //todo: pokud onlyUser, tak z backendu ber jen uzivatele, jinak ber vse
    // bude se to lišit i v vlastnosti isPrivate, pokud jen uzivatele, tak se zobrazi veskere, jinak se zobrazi jen ty co nejsou private!
    if(!onlyUser) return this.recipes;
    // return this.recipes.filter((recipe) => recipe.owner === this.userService.);
  }



  public getRecipe(recipeId: string): Recipe | null {
    return this.recipes.find((recipe: Recipe) => {
      console.log("toto", recipe, recipeId);
      return recipe._id === recipeId

    })
  }

  public addRecipe(recipe: Partial<Recipe>): Observable<any>{
    return this.http.post('/api/recipes', {recipe})
  }

  public updateRecipe(updatedRecipe: Recipe, name: string, description: string, ingredients: IngredientModel[] | null, isPrivate: boolean, image: any | null) {
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
