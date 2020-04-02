import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {AuthService} from "../../../services/auth.service";
import {LoginDataInterface} from "../../../interfaces/LoginDataInterface";



@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>, private authService: AuthService) { }

  public data: LoginDataInterface = {nickname: '', password: ''};

  ngOnInit(): void {
  }

  onLoginClick(): void {
    this.authService.logIn(this.data).toPromise()
      .then((result) => {
        console.log('jsem tu ');
      })
      .catch(() => {
        alert('chyba');
      });
  // this.dialogRef.close(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
