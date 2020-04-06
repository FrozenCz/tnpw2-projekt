import {Component, NgModule, OnInit} from '@angular/core';
import {KazaniService} from "../../../services/kazani.service";

@Component({
  selector: 'app-kazani-list',
  templateUrl: './kazani-list.component.html',
  styleUrls: ['./kazani-list.component.scss']
})


export class KazaniListComponent implements OnInit {

  constructor(public kazaniService: KazaniService) {
  }


  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
