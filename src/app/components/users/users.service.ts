import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../../auth.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService{
  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  createUser(email:string, password:string): Observable<{token: string}> {
    return this.httpClient.post<{ token: string }>("/api/users", {email, password})
  }

  deleteUser() {
    return this.httpClient.delete('/api/users/'+this.authService.getUserId());
  }





}
