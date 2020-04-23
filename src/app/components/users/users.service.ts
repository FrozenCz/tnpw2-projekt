import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../../../../shared/user";


@Injectable({
  providedIn: 'root'
})
export class UsersService{

  constructor(private httpClient: HttpClient) {
  }

  createUser(email:string, password:string): Observable<User|void> {
    return this.httpClient.post<User|void>("/api/users", {email, password})
  }



}
