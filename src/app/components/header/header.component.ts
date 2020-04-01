import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginDialogComponent} from '../dialog/login-dialog/login-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLogin(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog was closed');
      console.log(result);
    })
  }
}
