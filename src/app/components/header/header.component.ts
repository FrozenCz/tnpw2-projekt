import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginDialogComponent} from '../dialog/login-dialog/login-dialog.component';
import {AuthService} from "../../services/auth.service";
import {UzivatelModel} from "../../model/uzivatel.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedUser: UzivatelModel = undefined;

  constructor(public dialog: MatDialog, private authService: AuthService) {
    authService.isLogged.subscribe((result) => {
        this.loggedUser = result;
    });
  }

  ngOnInit(): void {
  }

  openLogin(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px',
      data: {}
    });

  }
}
