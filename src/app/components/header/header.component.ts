import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginDialogComponent} from '../dialog/login-dialog/login-dialog.component';
import {AuthService} from "../../auth.service";
import {UsersService} from '../users/users.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(public dialog: MatDialog, private authService: AuthService, private matSnackBar: MatSnackBar, private usersService: UsersService, private router: Router) {

  }

  isLogged() {
    return this.authService.isLogged;
  }

  ngOnInit(): void {
  }

  openLogin(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px',
      data: {}
    });

  }

  removeAccount() {
    if(confirm('Opravdu chcete smazat účet?')){
      this.usersService.deleteUser().toPromise()
        .then(
          (result) => {
            localStorage.removeItem('authJwtToken');
            this.authService.setLoginMode(false);
            this.router.navigateByUrl('/');
            this.matSnackBar.open('Uživatel odstraněn', 'OK', {duration: 2000, panelClass: 'successSnackBar'});
          },
          err => {
            console.log(err);
          }
        )
    }
  }
}
