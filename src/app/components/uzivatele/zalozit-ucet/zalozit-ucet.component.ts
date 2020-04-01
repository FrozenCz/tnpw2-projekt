import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-zalozit-ucet',
  templateUrl: './zalozit-ucet.component.html',
  styleUrls: ['./zalozit-ucet.component.scss']
})
export class ZalozitUcetComponent implements OnInit {
  registraceUzivatele: FormGroup;

  constructor() {
    this.registraceUzivatele = new FormGroup({
      prihlasovaciJmeno: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  ngOnInit(): void {
  }

}
