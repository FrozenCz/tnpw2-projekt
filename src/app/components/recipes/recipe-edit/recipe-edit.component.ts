import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../recipe.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {ImageCroppedEvent} from "ngx-image-cropper";
import {EnumAmountType} from "../ingredient.model";


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
  imageIsLoaded: boolean = false;
  imageLoading: boolean = false;
  defaultIngredientType: string = 'g';

  constructor(private recipeService: RecipeService, private matSnackBar: MatSnackBar, private router: Router) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  private initForm(){
    let recipeName = '';
    let recipeDescrition = '';
    let image = '';
    let recipeImagePath = '';
    let recipeIngredients = new FormArray([]);



    this.newRecipeForm = new FormGroup({
      'name': new FormControl(recipeName, [Validators.required]),
      'description': new FormControl(recipeDescrition, [Validators.required]),
      'image' : new FormControl(null),
      'recipeIngredients' : recipeIngredients,
      'isPrivate' : new FormControl(true)
    })
  }

  getControls(arrayName) {
    return (<FormArray>this.newRecipeForm.get(arrayName)).controls;
  }

  onCreateRecipe() {
    this.recipeService.addRecipe(this.newRecipeForm.value.name, this.newRecipeForm.value.description, null, false, this.croppedImage)
      .then(
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

  onAddIngredient() {
    (<FormArray>this.newRecipeForm.get('recipeIngredients')).push(
      new FormGroup({
        'name'  : new FormControl(null, Validators.required),
        'amount': new FormControl(null),
        'amount_type': new FormControl(0)
      })
    );
  }

  fileChangeEvent(event: any): void {
    this.imageLoading=true;
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
 imageLoaded(){
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
    (<FormArray>this.newRecipeForm.get('recipeIngredients')).removeAt(i)
  }
}
