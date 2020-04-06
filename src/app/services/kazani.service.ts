import { Injectable } from '@angular/core';
import {kazaniModel} from "../model/kazani.model";

@Injectable({
  providedIn: 'root'
})
export class KazaniService {
  kazaniList: kazaniModel[] = [];

  constructor() {
    this.kazaniList.push(new kazaniModel('první', 'https://www.youtube.com/embed/watch?v==pY2SGccvXGY', new Date()));
    this.kazaniList.push(new kazaniModel('druhé', 'https://youtu.be/embed/pY2SGccvXGY', new Date()));
    this.kazaniList.push(new kazaniModel('třetí', 'https://youtu.be/embed/pY2SGccvXGY', new Date()));
    this.kazaniList.push(new kazaniModel('čtvrté', 'https://youtu.be/embed/pY2SGccvXGY', new Date()));
  }



}
