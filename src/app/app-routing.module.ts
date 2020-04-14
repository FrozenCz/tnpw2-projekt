import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './components/users/users.component';

import {MainpageComponent} from './components/mainpage/mainpage.component';
import {CreateUserComponent} from './components/users/create-user/create-user.component';
import {ContactComponent} from "./components/contact/contact.component";

import {RecipesComponent} from "./components/recipes/recipes.component";
import {RecipeListComponent} from "./components/recipes/recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./components/recipes/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./components/recipes/recipe-edit/recipe-edit.component";

/**
 * cesty
 * @author Milan Knop
 */
const routes: Routes = [
  {path: '', pathMatch: 'full', component: MainpageComponent},
  {path: 'uzivatele', component: UsersComponent, children: [
      {path: 'zalozit-ucet', component: CreateUserComponent}
    ]},
  {path: 'recepty', component: RecipesComponent, children: [
      {path: '', pathMatch: 'full', component: RecipeListComponent},
      {path: 'detail/:id', component: RecipeDetailComponent}
    ]},
  {path: 'moje-recepty', component: RecipesComponent, data: {onlyUser: true}, children: [
      {path: '', pathMatch: 'full', component: RecipeListComponent, data: {onlyUser: true}}
    ]},
  {path: 'novy-recept', component: RecipeEditComponent, children: [
      {path: '', pathMatch: 'full', component: RecipeListComponent}
    ]},
  {path: 'kontakt', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
