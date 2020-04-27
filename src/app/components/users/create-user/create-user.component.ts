import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../users.service';
import {AuthService} from "../../../auth.service";

@Component({
  selector: 'app-zalozit-ucet',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  registraceUzivatele: FormGroup;

  constructor(private usersService: UsersService, private authService: AuthService) {
    this.registraceUzivatele = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnInit(): void {
  }

  onSubmit($event: any) {
    const val = this.registraceUzivatele.value;
    this.usersService.createUser(val.email, val.password).toPromise()
      .then(
        result => {
          localStorage.setItem("authJwtToken", result.token);
          this.authService.loadUserFromLocalStorage();
        },
        error => {
          console.log(error);
        }
      )

  }
}
