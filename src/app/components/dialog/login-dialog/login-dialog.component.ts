import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService, LoginDataInterface} from "./auth.service";



@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  badPassword: boolean = false;
  loginNotFound: boolean = false;
  dialogOpened: boolean = true;

  @Input() loginForm: FormGroup;
  public data: LoginDataInterface = {email: '', password: ''};

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>, public authService: AuthService, private snackBar: MatSnackBar) {
    this.loginForm = new FormGroup({
        login: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required])
      }
    );
    if(authService.user){
      this.dialogOpened = false;
    }
  }


  ngOnInit(): void {
  }


  onLoginClick(): void {
  //   const request = this.authService.logIn(this.data);
  //   if (request.state === true && request.code === 200) {
  //     this.dialogRef.close();
  //     this.dialogRef.afterClosed().toPromise()
  //         .then(() => {
  //         this.snackBar.open(request.msg, 'Přihlášen', {
  //           panelClass: 'successSnackBar',
  //           duration: 2000
  //         })
  //       })
  //   } else if (request.code === 403) {
  //     this.badPassword = true;
  //     this.loginForm.controls['password'].setErrors({'badPassword': true})
  //   } else if (request.code === 404) {
  //     this.loginNotFound = true;
  //     this.loginForm.controls['login'].setErrors({'loginNotFound': true})
  //   }
  //   console.log(request);
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  logoutUser() {
    this.dialogRef.close();
    this.dialogRef.afterClosed().toPromise()
      .then(() => {
        const request = this.authService.logoutUser();
        if (request.code === 200) {
          this.snackBar.open(request.msg, 'Ohlášen', {
            duration: 2000,
            panelClass: 'infoSnackBar',
          })
        }
    });
  }
}
