import { Injectable } from '@angular/core';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = 'https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0/'

  constructor(private http: HttpClient) { }

  loginByEmail(form: LoginI):Observable<ResponseI> {
    let user = this.url + 'login';
    return this.http.post<ResponseI>(user, form);
  }
}
