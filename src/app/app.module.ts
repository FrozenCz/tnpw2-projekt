import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { UzivateleComponent } from './components/uzivatele/uzivatele.component';
import { UzivateleListComponent } from './components/uzivatele/uzivatele-list/uzivatele-list.component';
import { UzivatelDetailComponent } from './components/uzivatele/uzivatel-detail/uzivatel-detail.component';
import { MajetekComponent } from './components/majetek/majetek.component';
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
import { ZalozitUcetComponent } from './components/uzivatele/zalozit-ucet/zalozit-ucet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UzivateleComponent,
    UzivateleListComponent,
    UzivatelDetailComponent,
    MajetekComponent,
    MainpageComponent,
    LoginDialogComponent,
    ZalozitUcetComponent
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
