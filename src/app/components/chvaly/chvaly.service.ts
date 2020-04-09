import { Injectable } from '@angular/core';
import {ChvalaModel} from "./chvala.model";

@Injectable({
  providedIn: 'root'
})
export class ChvalyService {
  private _chvalyList: ChvalaModel[] = [];

  constructor() {
    this.fakeData();
  }

  private fakeData(): void {
    for (let i = 0; i < 100; i++) {
    this._chvalyList.push(new ChvalaModel(i, 'test_'+i, 'http://server.milanknop.cz/file_example_MP3_2MG.mp3'));
    }
  }


  get chvalyList(): ChvalaModel[] {
    return this._chvalyList;
  }
}
