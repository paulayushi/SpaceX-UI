import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseUrl;
  decodedToken: string;  

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  login(model: User){
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.http.post<string>(this.baseUrl + 'spacex/auth/api/login', model, requestOptions).pipe(
      map((loginToken: string) => {
        if (loginToken) {
          localStorage.setItem('token', loginToken);
          this.decodedToken = this.jwtHelper.decodeToken(loginToken);
        }
      })
    );
  }

  loggedIn(): boolean{
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
