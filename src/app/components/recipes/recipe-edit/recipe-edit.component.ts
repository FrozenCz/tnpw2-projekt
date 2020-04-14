import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  @Input() newRecipeForm: FormGroup;
  id = null;


  constructor(private recipeService: RecipeService) {
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
        (result) => console.log(result)
      )
  }
}
