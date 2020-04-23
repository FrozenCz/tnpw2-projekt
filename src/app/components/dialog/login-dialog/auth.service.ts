import {Injectable} from '@angular/core';
import {User} from "../../../../../shared/user";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface LoginDataInterface {
  email,
  password: string
}

interface userToken {
  email,
  token: string
}

export interface authLoginMessage {
  msg: string,
  code: number,
  state: boolean,
  logedUser?: User
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private fakeUser: User; // pomocne

  constructor(private http: HttpClient) {
    this.fakeUser = new User(1, 'test@test.cz');
    this.loadUserFromLocalStorage();
  }

  private _user: User;

  get user(): User {
    return this._user;
  }

  logIn(data: LoginDataInterface) {
    this.http.post('/api/users', {email: data.email, password: data.password}).toPromise()
      .then(
        (result) => {
          console.log(result, "toto");
        }
      ).catch(
      (err) => {
        console.log(err, "catch");
      }
    )
  }

  logoutUser(): authLoginMessage {
    //TODO: uedlat odhlaseni na serveru ?
    localStorage.removeItem('user');
    this._user = null;
    return {msg: 'Uživatel byl úspěšně odhlášen', code: 200, state: true};
  }

  private loadUserFromLocalStorage(): void {
    const user: userToken = JSON.parse(localStorage.getItem('user'));

  }
}
