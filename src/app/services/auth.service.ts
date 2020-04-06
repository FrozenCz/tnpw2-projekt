import {Injectable} from '@angular/core';
import {LoginDataInterface} from "../interfaces/loginDataInterface";
import {UzivatelModel} from "../model/uzivatel.model";
import {BehaviorSubject, Observable} from "rxjs";

interface userToken {
  email, token: string
}

export interface authLoginMessage {
  msg: string,
  code: number,
  state: boolean,
  logedUser?: UzivatelModel
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private logged: BehaviorSubject<UzivatelModel> = new BehaviorSubject<UzivatelModel>(undefined);
  public isLogged: Observable<UzivatelModel> = this.logged.asObservable();
  private fakeUser: UzivatelModel;

  constructor() {
    this.fakeUser = new UzivatelModel(1, 'test@test.cz', 'tadsadaasda', true);
    this.loadUserFromLocalStorage();
  }

  private loadUserFromLocalStorage(): void {
    const user:userToken = JSON.parse(localStorage.getItem('user'));
    if(user) this.logByToken(user);
  }

  private saveUserToLocalStorage(uzivatel: UzivatelModel): void {
    localStorage.setItem('user', JSON.stringify({'email': uzivatel.email, 'token': uzivatel.token}));
  }

  logByToken(userToken: userToken) {
    if(userToken.email && userToken.token && userToken.email === this.fakeUser.email && userToken.token === this.fakeUser.token){
     //TODO: overeni ze serveru
     this.logged.next(this.fakeUser);
    }
  }

  logIn(data: LoginDataInterface): authLoginMessage {
    let msg: authLoginMessage;
    //TODO: dodelat prihlaseni pres server
    if (data.nickname == 'test' && data.password == '123') {
      this.logged.next(this.fakeUser);
      this.saveUserToLocalStorage(this.fakeUser);
      msg = {
        msg: 'Uživatel úspěšně přihlášen',
        code: 200,
        state: true,
        logedUser: this.fakeUser
      }
    } else {
      if (data.nickname === 'test') {
        msg = {
          msg: 'Špatné heslo',
          code: 403,
          state: false,
        }
      } else {
        msg = {
          msg: 'Uživatel neexistuje',
          code: 404,
          state: false,
        }
      }

    }
    return msg;
  }

  logoutUser(loggedUser: UzivatelModel): authLoginMessage {
    //TODO: uedlat odhlaseni na serveru ?
    localStorage.removeItem('user');
    this.logged.next(undefined);
    return {msg: 'Uživatel byl úspěšně odhlášen', code: 200, state:true};
  }
}
