import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../../../../shared/user";


@Injectable({
  providedIn: 'root'
})
export class UsersService{
  private user: User;

  constructor(private httpClient: HttpClient) {
    const token = localStorage.getItem('authJwtToken');
    if(token) {

    }

  }

  createUser(email:string, password:string): Observable<{token: string}> {
    return this.httpClient.post<{ token: string }>("/api/users", {email, password})
  }





}
