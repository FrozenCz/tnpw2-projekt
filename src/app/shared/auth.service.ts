import {Injectable} from '@angular/core';
import {LoginDataInterface} from "../interfaces/loginDataInterface";
import {UserModel} from "../components/users/userModel";

interface userToken {
  email, token: string
}

export interface authLoginMessage {
  msg: string,
  code: number,
  state: boolean,
  logedUser?: UserModel
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _user: UserModel;

  private fakeUser: UserModel; // pomocne

  constructor() {
    this.fakeUser = new UserModel(1, 'test@test.cz', 'tadsadaasda', true);
    this.loadUserFromLocalStorage();
  }

  private loadUserFromLocalStorage(): void {
    const user:userToken = JSON.parse(localStorage.getItem('user'));
    if(user) this.logInByToken(user);
  }

  private saveUserToLocalStorage(uzivatel: UserModel): void {
    localStorage.setItem('user', JSON.stringify({'email': uzivatel.email, 'token': uzivatel.token}));
  }

  get user(): UserModel {
    return this._user;
  }

  logInByToken(userToken: userToken) {
    if(userToken.email && userToken.token && userToken.email === this.fakeUser.email && userToken.token === this.fakeUser.token){
     //TODO: overeni ze serveru
     this._user = this.fakeUser;
    }
  }

  logIn(data: LoginDataInterface): authLoginMessage {
    let msg: authLoginMessage;
    //TODO: dodelat prihlaseni pres server
    if (data.nickname == 'test' && data.password == '123') {
      this._user = this.fakeUser;
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

  logoutUser(): authLoginMessage {
    //TODO: uedlat odhlaseni na serveru ?
    localStorage.removeItem('user');
    this._user = null;
    return {msg: 'Uživatel byl úspěšně odhlášen', code: 200, state:true};
  }
}
