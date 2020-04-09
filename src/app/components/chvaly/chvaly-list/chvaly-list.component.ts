import {Component, OnInit} from '@angular/core';
import {ChvalyService} from "../chvaly.service";
import {ChvalaModel} from "../chvala.model";
import {PageEvent} from "@angular/material/paginator";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-chvaly-list',
  templateUrl: './chvaly-list.component.html',
  styleUrls: ['./chvaly-list.component.scss']
})
export class ChvalyListComponent implements OnInit {
  private _chvalyList: ChvalaModel[];
  private _visibleList: ChvalaModel[];
  length: number;
  pageSize: number;
  pageSizeOptions: number[];

  constructor(private chvalyService: ChvalyService) {
    this._chvalyList = this.chvalyService.chvalyList;
    this.length = this.chvalyList.length;
    this.pageSize = 15;
    this.pageSizeOptions = [15, 30, 60, 120];
    this.setVisibleList(0, 15);
  }

  get chvalyList(): ChvalaModel[] {
    return this._chvalyList;
  }
  get visibleList(): ChvalaModel[] {
    return this._visibleList;
  }

  ngOnInit(): void {
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  private setVisibleList(from: number, to: number): void{
    console.log(from, to);
    this._visibleList = this.chvalyList.slice(from, to);
  }

  setVisible($event: PageEvent) {
    this.setVisibleList($event.pageIndex*$event.pageSize, ($event.pageIndex+1)*$event.pageSize)
  }
}
