import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-zalozit-ucet',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  registraceUzivatele: FormGroup;

  constructor() {
    this.registraceUzivatele = new FormGroup({
      prihlasovaciJmeno: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  ngOnInit(): void {
  }

}
