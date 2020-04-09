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
import { KazaniComponent } from './components/kazani/kazani.component';
import { ChvalyComponent } from './components/chvaly/chvaly.component';
import { KazaniListComponent } from './components/kazani/kazani-list/kazani-list.component';
import { KazaniDetailComponent } from './components/kazani/kazani-detail/kazani-detail.component';
import { ChvalyListComponent } from './components/chvaly/chvaly-list/chvaly-list.component';
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
    KazaniComponent,
    ChvalyComponent,
    KazaniListComponent,
    KazaniDetailComponent,
    ChvalyListComponent,
    FooterComponent,
    SafeUrlPipe,
    YoutubeIdExtractPipe,
    ContactComponent
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
    MatPaginatorModule
  ],
  providers: [{provide: MatPaginatorIntl, useValue: getCsPaginatorIntl()}],
  bootstrap: [AppComponent]
})
export class AppModule { }
