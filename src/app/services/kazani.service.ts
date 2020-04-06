import { Injectable } from '@angular/core';
import {kazaniModel} from "../model/kazani.model";

@Injectable({
  providedIn: 'root'
})
export class KazaniService {
  kazaniList: kazaniModel[] = [];

  constructor() {
    this.kazaniList.push(new kazaniModel('první', 'https://www.youtube.com/embed/watch?v=pY2SGccvXGY', new Date()));
    this.kazaniList.push(new kazaniModel('druhé', 'https://www.youtube.com/watch?v=78e_Y6dKkps&list=RDEMzCu0Q9OE6zMoKIiL1MWm3w&index=14', new Date()));
    this.kazaniList.push(new kazaniModel('první', 'https://www.youtube.com/embed/watch?v=pY2SGccvXGY', new Date()));
    this.kazaniList.push(new kazaniModel('druhé', 'https://www.youtube.com/watch?v=78e_Y6dKkps&list=RDEMzCu0Q9OE6zMoKIiL1MWm3w&index=14', new Date()));
    this.kazaniList.push(new kazaniModel('druhé', 'https://www.youtube.com/watch?v=78e_Y6dKkps&list=RDEMzCu0Q9OE6zMoKIiL1MWm3w&index=14', new Date()));
    this.kazaniList.push(new kazaniModel('první', 'https://www.youtube.com/embed/watch?v=pY2SGccvXGY', new Date()));
  }



}
