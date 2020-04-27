import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import * as jwt_decode from "jwt-decode";
import {isJWT} from "class-validator";


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  get isLogged(): boolean {
    return this._isLogged;
  }

  private _isLogged: boolean = false

  constructor(private http: HttpClient) {
    this.loadUserFromLocalStorage();
  }

  setLoginMode(isLogged: boolean){
    this._isLogged = isLogged;
  }

  logIn(email: string, password: string): Observable<any>{
    return this.http.post('/api/users/login', {email, password})
  }

  logOut(){
      localStorage.removeItem('authJwtToken');
      this.setLoginMode(false);
  }

  loadUserFromLocalStorage(): void {
    const token = localStorage.getItem('authJwtToken');
    if(isJWT(token)){
      this.setLoginMode(true);
    }
  }
}
