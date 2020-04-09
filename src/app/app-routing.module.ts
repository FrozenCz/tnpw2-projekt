import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {UserDetailComponent} from './components/users/user-detail/user-detail.component';
import {UsersListComponent} from './components/users/users-list/users-list.component';
import {MainpageComponent} from './components/mainpage/mainpage.component';
import {CreateUserComponent} from './components/users/create-user/create-user.component';
import {KazaniComponent} from "./components/kazani/kazani.component";
import {ChvalyComponent} from "./components/chvaly/chvaly.component";
import { KazaniListComponent } from './components/kazani/kazani-list/kazani-list.component';
import {KazaniDetailComponent} from "./components/kazani/kazani-detail/kazani-detail.component";
import { ChvalyListComponent } from './components/chvaly/chvaly-list/chvaly-list.component';
import {ContactComponent} from "./components/contact/contact.component";

/**
 * cesty
 * @author Milan Knop
 */
const routes: Routes = [
  {path: '', pathMatch: 'full', component: MainpageComponent},
  {path: 'kazani', component: KazaniComponent, children: [
     {path: '', pathMatch: 'full', component: KazaniListComponent},
      {path: ':id', component: KazaniDetailComponent}
    ]},
  {path: 'chvaly', component: ChvalyComponent, children: [
      {path: '' , pathMatch: 'full', component: ChvalyListComponent},
    ]},
  {path: 'uzivatele', component: UsersComponent, children: [
      {path: 'zalozit-ucet', component: CreateUserComponent}
    ]},
  {path: 'kontakt', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
