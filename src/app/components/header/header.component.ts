import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginDialogComponent} from '../dialog/login-dialog/login-dialog.component';
import {AuthService} from "../dialog/login-dialog/auth.service";
import {User} from "../../../../shared/user";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(public dialog: MatDialog, private authService: AuthService) {

  }

  getUser(): User {
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
