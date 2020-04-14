import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { LoginDialogComponent } from './components/dialog/login-dialog/login-dialog.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CreateUserComponent } from './components/users/create-user/create-user.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatListModule} from "@angular/material/list";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import {SafeUrlPipe} from './pipes/safe-url.pipe';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {YoutubeIdExtractPipe} from './pipes/youtubeIdExtract.pipe';
import {MatGridListModule} from "@angular/material/grid-list";
import { ContactComponent } from './components/contact/contact.component';
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {getCsPaginatorIntl} from "./util/cs-paginator-intl";
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import {MatChipsModule} from "@angular/material/chips";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    UsersListComponent,
    UserDetailComponent,
    MainpageComponent,
    LoginDialogComponent,
    CreateUserComponent,
    FooterComponent,
    SafeUrlPipe,
    YoutubeIdExtractPipe,
    ContactComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatListModule,
    MatSnackBarModule,
    MatCardModule,
    YouTubePlayerModule,
    MatGridListModule,
    MatPaginatorModule,
    MatChipsModule
  ],
  providers: [{provide: MatPaginatorIntl, useValue: getCsPaginatorIntl()}],
  bootstrap: [AppComponent]
})
export class AppModule { }
