import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginDialogComponent} from '../dialog/login-dialog/login-dialog.component';
import {AuthService} from "../dialog/login-dialog/auth.service";
import {UserModel} from "../../../../shared/userModel";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(public dialog: MatDialog, private authService: AuthService) {

  }

  getUser(): UserModel {
    return this.authService.user;
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
