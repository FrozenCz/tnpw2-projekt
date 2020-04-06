import { Component, OnInit } from '@angular/core';
import {KazaniService} from "../../../services/kazani.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-kazani-list',
  templateUrl: './kazani-list.component.html',
  styleUrls: ['./kazani-list.component.scss']
})
export class KazaniListComponent implements OnInit {

  safeSrc: SafeResourceUrl;
  constructor(public kazaniService: KazaniService, private sanitizer: DomSanitizer) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/pY2SGccvXGY");
  }

  ngOnInit(): void {
  }

}
