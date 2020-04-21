import {Injectable} from '@angular/core';
import {UserModel} from './userModel';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService{

  constructor(private httpClient: HttpClient) {
  }

  createUser(email:string, password:string): Observable<UserModel|void> {
    return this.httpClient.post<UserModel|void>("/api/user", {email, password})
  }
}
