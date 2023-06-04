import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { productsI } from '../models/products.interface';
import { Observable } from 'rxjs';
import { workersI } from '../models/workers.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  url: string = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  getProducts():Observable<productsI[]> {
    let url = this.url + 'products';
    return this.http.get<productsI[]>(url);
  }

  getWorkers():Observable<workersI[]> {
    let url = this.url + 'users';
    return this.http.get<workersI[]>(url);
  }
}
