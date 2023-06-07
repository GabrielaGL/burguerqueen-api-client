import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { productsI } from '../models/products.interface';
import { workersI } from '../models/workers.interface';
import { responsepostI } from '../models/responsepost';
import { ordersI, orderqtyI } from '../models/orders.interface';

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

  postWorker(form:workersI):Observable<responsepostI> {
    let url = this.url + 'users'; 
    return this.http.post<responsepostI>(url, form);
  }

  postProducts(form:productsI):Observable<responsepostI> {
    let url = this.url + 'products'; 
    return this.http.post<responsepostI>(url, form);
  }

  getSingleWorker(id:any):Observable<workersI> {
    let url = this.url + 'users/' + id;
    return this.http.get<workersI>(url);
  }

  getOrders():Observable<ordersI[]> {
    let url = this.url + 'orders';
    return this.http.get<ordersI[]>(url);
  }

  postOrders(form:ordersI):Observable<responsepostI> {
    let url = this.url + 'orders'; 
    return this.http.post<responsepostI>(url, form);
  }
}
