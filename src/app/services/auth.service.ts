import { Injectable } from '@angular/core';
import {LoginDataInterface} from "../interfaces/LoginDataInterface";
import {UzivatelModel} from "../model/uzivatel.model";
import {BehaviorSubject, Observable, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logged: BehaviorSubject<UzivatelModel> = new BehaviorSubject<UzivatelModel>(undefined);
  private isLogged: Observable<UzivatelModel> = this.logged.asObservable();
  private fakeUser: UzivatelModel;

  constructor() {
    this.fakeUser = new UzivatelModel(1,'test@test.cz','tadsadaasda', true);
    }


  logIn(data: LoginDataInterface): Observable<UzivatelModel>{
    //TODO: dodelat prihlaseni pres server
    if(data.nickname == 'test' && data.password == '123'){
      this.logged.next(this.fakeUser);
    }
    return this.isLogged;
  }
}
