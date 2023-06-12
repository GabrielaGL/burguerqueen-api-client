import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { productsI } from '../models/products.interface';
import { workersI } from '../models/workers.interface';
import { responsepostI } from '../models/responsepost';
import { ordersI } from 'src/app/models/orders.interface';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  url: string = 'http://localhost:8080/'
  private cartProducts: productsI[] = [];
  private orders: ordersI[] = [];

  private cart = new BehaviorSubject<productsI[]>([]);
  cart$ = this.cart.asObservable();

  constructor(private http: HttpClient) { }

  getProducts(): Observable<productsI[]> {
    let url = this.url + 'products';
    return this.http.get<productsI[]>(url);
  }

  getProductById(id:number):Observable<productsI[]> {
    let url = this.url + 'products/' + id;
    return this.http.get<productsI[]>(url);
  }

  getWorkers(): Observable<workersI[]> {
    let url = this.url + 'users';
    return this.http.get<workersI[]>(url);
  }

  getWorkerbyId(id: any): Observable<workersI> {
    let url = this.url + 'users/' + id;
    return this.http.get<workersI>(url);
  }

  getOrders(): Observable<ordersI[]> {
    let url = this.url + 'orders';
    return this.http.get<ordersI[]>(url);
  }



  postWorker(form: workersI): Observable<responsepostI> {
    let url = this.url + 'users';
    return this.http.post<responsepostI>(url, form);
  }

  postProducts(form: productsI): Observable<responsepostI> {
    let url = this.url + 'products';
    return this.http.post<responsepostI>(url, form);
  }

  postOrders(form: ordersI): Observable<responsepostI> {
    let url = this.url + 'orders';
    return this.http.post<responsepostI>(url, form);
  }


  
  addProduct(product: productsI) {
    if (this.cartProducts.length === 0) {
      product.qty = 1;
      this.cartProducts.push(product);
      this.cart.next(this.cartProducts);
    } else {
      let productMod = this.cartProducts.find(element => {
        return element.id === product.id;
      })
      if (productMod) {
        productMod.qty = productMod.qty + 1
      } else {
        product.qty = 1;
        this.cartProducts.push(product);
        this.cart.next(this.cartProducts);
      }
    }
  }

  deleteProduct(id:number) {
    this.cartProducts = this.cartProducts.filter((product) => {
      return product.id != id;
    })
    this.cart.next(this.cartProducts);
  }

  findIdProduct(id:number) {
    return this.cartProducts.find(element => {
      return element.id === id;
    })
  }

  totalCart() {
    const total = this.cartProducts.reduce(function (acc, product) {return acc + (product.qty * product.price);}, 0)
    return total;
  }

}
