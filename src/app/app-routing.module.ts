import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UzivateleComponent} from './components/uzivatele/uzivatele.component';
import {UzivatelDetailComponent} from './components/uzivatele/uzivatel-detail/uzivatel-detail.component';
import {UzivateleListComponent} from './components/uzivatele/uzivatele-list/uzivatele-list.component';
import {MainpageComponent} from './components/mainpage/mainpage.component';
import {ZalozitUcetComponent} from './components/uzivatele/zalozit-ucet/zalozit-ucet.component';
import {KazaniComponent} from "./components/kazani/kazani.component";
import {ChvalyComponent} from "./components/chvaly/chvaly.component";
import { KazaniListComponent } from './components/kazani/kazani-list/kazani-list.component';
import {KazaniDetailComponent} from "./components/kazani/kazani-detail/kazani-detail.component";
import { ChvalyListComponent } from './components/chvaly/chvaly-list/chvaly-list.component';

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
  {path: 'uzivatele', component: UzivateleComponent, children: [
      {path: 'zalozit-ucet', component: ZalozitUcetComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
