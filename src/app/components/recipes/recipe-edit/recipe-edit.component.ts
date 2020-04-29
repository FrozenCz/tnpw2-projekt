import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../recipe.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {ImageCroppedEvent} from "ngx-image-cropper";
import {Recipe} from "../../../../../shared/recipe";
import {EnumAmountType} from "../../../../../shared/ingredient.model";



@Component({
  selector: 'app-add-recipe',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  @Input() newRecipeForm: FormGroup;
  id = null;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  recipeImage: any = '';
  imageIsLoaded: boolean = false;
  imageLoading: boolean = false;
  defaultIngredientType: string = 'g';
  recipe: Recipe;
  imageUrl: any;


  constructor(private recipeService: RecipeService, private matSnackBar: MatSnackBar, private router: Router, private route: ActivatedRoute) {
    this.initForm();
    this.id = route.snapshot.params.id ? route.snapshot.params.id : null;
    if (this.id != null) {
      recipeService.getRecipe(this.id).then(
        (recipe) => {
          this.recipe = recipe;
          this.initForm();
        }
      )
    }

  }

  ngOnInit(): void {
  }

  private initForm() {
    let recipeName = '';
    let recipeDescrition = '';
    let recipeImage = '';
    let ingredients = new FormArray([]);
    let isPrivate = true;

    if (this.recipe) {
      recipeName = this.recipe.name;
      recipeDescrition = this.recipe.description;
      recipeImage = this.recipe.imagePath;
      if (this.recipe['ingredients']) {
        for (const ingredient of this.recipe.ingredients) {
          ingredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
              'amount_type': new FormControl(ingredient.amount_type),
            })
          );
        }
      }
      isPrivate = this.recipe.isPrivate;
    }

    this.newRecipeForm = new FormGroup({
      'name': new FormControl(recipeName, [Validators.required]),
      'description': new FormControl(recipeDescrition, [Validators.required]),
      'imagePath': new FormControl(recipeImage),
      ingredients,
      'isPrivate': new FormControl(isPrivate)
    })
  }

  getControls(arrayName) {
    return (<FormArray>this.newRecipeForm.get(arrayName)).controls;
  }

  onSubmitRecipe() {
    // pokud se jedna o prvotni vlozeni
    if (!this.recipe) {
      this.createRecipe();
    } else {
      this.updateRecipe(this.recipe);
    }
  }

  onAddIngredient() {
    (<FormArray>this.newRecipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, Validators.required),
        'amount_type': new FormControl(0)
      })
    );
  }

  fileChangeEvent(event: any): void {
    this.imageLoading = true;
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  imageLoaded() {
    this.imageLoading = false;
    this.imageIsLoaded = true;
  }

  cropperReady() {
    // cropper ready
  }

  loadImageFailed() {
    // show message
  }

  closeCropper() {
    this.imageIsLoaded = false;
  }

  private enumAmountType = EnumAmountType;

  amountTypes(): string[] {
    var keys = Object.keys(this.enumAmountType);
    return keys.slice(keys.length / 2);
  }

  removeIngredient(i: number) {
    (<FormArray>this.newRecipeForm.get('ingredients')).removeAt(i)
  }

  private createRecipe() {
    this.recipeService.addRecipe({
      name: this.newRecipeForm.value.name,
      description: this.newRecipeForm.value.description,
      ingredients: this.newRecipeForm.value.ingredients,
      isPrivate: this.newRecipeForm.value.isPrivate,
      imagePath: this.newRecipeForm.value.imagePath
    }).toPromise().then(
        () => {
          this.matSnackBar.open('Recept úspěšně vložen', 'OK', {duration: 2000, panelClass: 'successSnackBar'});
          this.router.navigate(['/moje-recepty']);
        }
      )
      .catch(
        () => {
          alert('chyba');
        }
      )
  }

  private updateRecipe(recipe: Recipe) {
    this.recipeService.updateRecipe(
      recipe, this.newRecipeForm.value.name, this.newRecipeForm.value.description,
      this.newRecipeForm.value.ingredients, this.newRecipeForm.value.isPrivate, this.newRecipeForm.value.imagePath).toPromise()
      .then(
        () => {
        this.matSnackBar.open('Recept upraven', 'OK', {duration: 2000, panelClass: 'successSnackBar'});
        this.router.navigate(['../'], {relativeTo: this.route});
      })
  }

  onDelete() {
    if(confirm('Opravdu chcete smazat tento recept? ')){
      this.recipeService.deleteRecipe(this.recipe).toPromise()
        .then(
          () => {
            this.matSnackBar.open('Recept smazán', 'OK', {duration: 2000, panelClass: 'successSnackBar'});
            this.router.navigateByUrl('/moje-recepty');
          }
        )
        .catch()
    }
  }
}
