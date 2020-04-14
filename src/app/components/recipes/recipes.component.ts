import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../shared/auth.service";
import {ActivatedRoute} from "@angular/router";

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
