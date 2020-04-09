import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uzivatele',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userId: number;

  constructor() { }

  ngOnInit(): void {
  }

}
