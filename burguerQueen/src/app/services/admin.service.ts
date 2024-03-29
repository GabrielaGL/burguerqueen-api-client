import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { workersI } from '../models/workers.interface';
import { responsepostI } from '../models/responsepost';
import { ordersI } from 'src/app/models/orders.interface';
import { productsI } from 'src/app/models/orders.interface';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  url: string = 'https://mock-burguerqueen.glitch.me/'
  private cartProducts: productsI[] = [];
  private orders: ordersI[] = [];

  private cart = new BehaviorSubject<productsI[]>([]);
  cart$ = this.cart.asObservable();

  constructor(private http: HttpClient) { }

  getProducts(): Observable<productsI[]> {
    let url = this.url + 'products';
    return this.http.get<productsI[]>(url);
  }

  getProductById(id:any):Observable<productsI> {
    let url = this.url + 'products/' + id;
    return this.http.get<productsI>(url);
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



  postWorker(form: workersI): Observable<any> {
    let url = this.url + 'users';
    return this.http.post<any>(url, form);
  }

  postProducts(form: productsI): Observable<responsepostI> {
    let url = this.url + 'products';
    return this.http.post<responsepostI>(url, form);
  }

  postOrders(form: ordersI): Observable<responsepostI> {
    let url = this.url + 'orders';
    return this.http.post<responsepostI>(url, form);
  }



  patchWorker(id:any, form: workersI):Observable<responsepostI> {
    let url = this.url + 'users/' + id;
    return this.http.patch<responsepostI>(url, form)
  }

  patchProduct(id:any, form:productsI):Observable<responsepostI> {
    let url = this.url + 'products/' + id;
    return this.http.patch<responsepostI>(url, form)
  }

  patchOrder(id:any, status:any):Observable<ordersI> {
    let url = this.url + 'orders/' + id;
    return this.http.patch<any>(url, status)
  }


  deleteOrders(id:any):Observable<any> {
    let url = this.url + 'orders/' + id;
    return this.http.delete<any>(url)
  }

  deleteProducts(id:any):Observable<any> {
    let url = this.url + 'products/' + id;
    return this.http.delete<any>(url)
  }

  deleteWorkers(id:any):Observable<any> {
    let url = this.url + 'users/' + id;
    return this.http.delete<any>(url)
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
    return this.cartProducts;
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
