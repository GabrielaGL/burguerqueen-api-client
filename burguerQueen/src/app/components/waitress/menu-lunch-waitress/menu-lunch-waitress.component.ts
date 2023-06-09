import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, take } from 'rxjs';

import { OrdersService } from '../../../services/admin.service';
import { AlertsService } from 'src/app/services/alerts/alerts.service';

import { productsI } from 'src/app/models/products.interface';
import { ordersI } from 'src/app/models/orders.interface';


@Component({
  selector: 'app-menu-lunch-waitress',
  templateUrl: './menu-lunch-waitress.component.html',
  styleUrls: ['./menu-lunch-waitress.component.sass']
})
export class MenuLunchWaitressComponent {

  products:productsI[] = [];
  filteredProducts: productsI[] = [];

  orders: ordersI[] = [];
  cart$ = this.service.cart$

  date:any = new Date();
  format:string = 'M/d/yy, h:mm a';

  newOrder = new FormGroup({
    table: new FormControl(0, Validators.required),
    client: new FormControl('', Validators.required),
    status: new FormControl('pending'),
  })

  constructor(private service:OrdersService, private activerouter: ActivatedRoute, private datePipe: DatePipe, private alerts:AlertsService) {}

  ngOnInit():void {
    this.service.getProducts().subscribe(data => {
      this.products = data
      this.filteredProducts = data.filter(product => product.type === "Comida");     
    })
  }

  addToCart(product: productsI) {
    const pro = this.service.addProduct(product);
    console.log(pro);

  }

  totalProduct(price: number, qty: number) {
    return price * qty;
  }

  deleteProduct(id: number) {
    this.service.deleteProduct(id);
  }

  updateCart(operation: string, id: number) {
    const product = this.service.findIdProduct(id);
    if (product) {
      if (operation === 'min' && product.qty > 0) {
        product.qty = product.qty - 1;
      }
      if (operation === 'add') {
        product.qty = product.qty + 1;
      }
      if (product.qty === 0) {
        this.deleteProduct(id);
      }
    }
  }

  totalCart() {
    const result = this.service.totalCart();
    return result;
  }


  createOrder() {
    console.log(this.newOrder);
    if (!this.newOrder.invalid) {
      this.cart$.pipe(
        take(1),
        map((order) => {
          let dataOrder: ordersI = {
            table: this.newOrder.controls.table.value,
            client: this.newOrder.controls.client.value,
            products: order,
            status: this.newOrder.controls.status.value,
            dataEntry: this.datePipe.transform(this.date, this.format),
            dateProcessed: ''
          }
          return dataOrder
        }),
        switchMap(dataOrder => {
          return this.service.postOrders(dataOrder)
        })
      ).subscribe({
        next: (response:any) => {
          this.alerts.responseSuccess('Solo queda esperar a que nuestrxs cocinerxs reales lo preparen 🤤', '¡Orden creada!');
        },
        error: (error) => {
          this.alerts.responseError('Parece que la orden no se logró 😥 Inténtalo de nuevo', 'Error')
        }
      })
    } else {
      this.alerts.responseError('Parece que la orden no se logró 😥 Inténtalo de nuevo', 'Error')
    }
  }

}
