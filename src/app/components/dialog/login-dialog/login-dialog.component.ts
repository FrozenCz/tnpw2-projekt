import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  dialogOpened: boolean = true;

  @Input() loginForm: FormGroup;
  public data = {email: '', password: ''};

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>, public authService: AuthService, private snackBar: MatSnackBar, private router: Router) {
    this.loginForm = new FormGroup({
        login: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required])
      }
    );
    if (authService.isLogged) {
      this.dialogOpened = false;
    }
  }


  ngOnInit(): void {

  }


  onLogin(): void {
    this.authService.logIn(this.data.email, this.data.password).toPromise()
      .then(
        (reply: any) => {
          if(reply.token){
            this.dialogRef.close();
            localStorage.setItem("authJwtToken", reply.token);
            this.authService.setLoginMode(true);
            this.snackBar.open('Uživatel úspěšně přihlášen', 'Přihlášen', {
              duration: 2000,
              panelClass: 'successSnackBar',
            });
          }else{
            if(reply.response.message === 'Spatne heslo') {
              this.loginForm.controls['password'].setErrors({'incorrect':true})
            }else{
              this.loginForm.controls['login'].setErrors({'incorrect': true});

            }
          }

        }, err => {
          console.log('login failed', err);
        }
      )
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onLogout() {
    this.dialogRef.close();
    this.dialogRef.afterClosed().toPromise()
      .then(() => {
        this.authService.logOut();
          this.snackBar.open('Uživatel úspěšně odhlášen', 'Odhlášen', {
            duration: 2000,
            panelClass: 'infoSnackBar',
          });
          this.router.navigateByUrl('/recepty');
        }
      )
  }

}
