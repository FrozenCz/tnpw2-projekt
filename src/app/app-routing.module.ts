import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UzivateleComponent} from './components/uzivatele/uzivatele.component';
import {UzivatelDetailComponent} from './components/uzivatele/uzivatel-detail/uzivatel-detail.component';
import {UzivateleListComponent} from './components/uzivatele/uzivatele-list/uzivatele-list.component';
import {MajetekComponent} from './components/majetek/majetek.component';
import {MainpageComponent} from './components/mainpage/mainpage.component';
import {ZalozitUcetComponent} from './components/uzivatele/zalozit-ucet/zalozit-ucet.component';

/**
 * cesty
 * @author Milan Knop
 */
const routes: Routes = [
  {path: '', pathMatch: 'full', component: MainpageComponent},
  {path: 'majetek', component: MajetekComponent},
  {path: 'uzivatele', component: UzivateleComponent, children: [
      {path: '' , pathMatch: 'full', component: UzivateleListComponent},
      {path: 'zalozit-ucet', component: ZalozitUcetComponent},
      {path: ':id', component: UzivatelDetailComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
