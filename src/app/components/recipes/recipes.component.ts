import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  constructor(private authService: AuthService) { }

  isAuthorized(){
    if(this.authService.user) return this.authService.user.overen;
    return false;
  }

  ngOnInit(): void {
  }

}
