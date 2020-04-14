import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../recipe.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  @Input() newRecipeForm: FormGroup;
  id = null;


  constructor(private recipeService: RecipeService, private matSnackBar: MatSnackBar, private router: Router) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  private initForm(){
    let recipeName = '';
    let recipeDescrition = '';
    let recipeImagePath = '';
    let recipeIngredients = new FormArray([]);

    this.newRecipeForm = new FormGroup({
      'name': new FormControl(recipeName, [Validators.required]),
      'description': new FormControl(recipeDescrition)
    })
  }

  onCreateRecipe() {
    this.recipeService.addRecipe(this.newRecipeForm.value.name, this.newRecipeForm.value.description, null, false)
      .then(
        () => {
          this.matSnackBar.open('Recept úspěšně vložen', 'OK', {duration: 2000, panelClass: 'successSnackBar'});
          this.router.navigate(['/recepty']);
        }
      )
      .catch(
        () => {
          alert('chyba');
        }
      )
  }
}
