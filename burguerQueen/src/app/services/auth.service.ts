import { Injectable } from '@angular/core';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = 'https://mock-burguerqueen.glitch.me/'

  constructor(private http: HttpClient) { }

  loginByEmail(form: LoginI):Observable<any> {
    let user = this.url + 'login';
    return this.http.post<ResponseI>(user, form);
  }
}
