import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { OrdersService } from '../../services/admin.service';
import { productsI } from 'src/app/models/products.interface';
import { ordersI } from 'src/app/models/orders.interface';

@Component({
  selector: 'app-menu-waitress',
  templateUrl: './menu-waitress.component.html',
  styleUrls: ['./menu-waitress.component.sass']
})
export class MenuWaitressComponent {
  
  products:productsI[] = [];
  filteredProducts: productsI[] = [];

  orders:ordersI[] = [];
  cart$ = this.service.cart$

  newOrder = new FormGroup({
    table: new FormControl('', Validators.required),
    client: new FormControl('', Validators.required),
    products: new FormControl('', Validators.required),
    dataEntry: new FormControl(new Date())
  })

  constructor(private service:OrdersService, private activerouter:ActivatedRoute) {}

  ngOnInit():void {
    this.service.getProducts().subscribe(data => {
      this.products = data
      this.filteredProducts = data.filter(product => product.type === "Desayuno");
    })
  }

  addToCart(product:productsI) {
    return this.service.addProduct(product);
  }

  totalProduct(price:number, qty:number) {
    return price * qty;
  }

  deleteProduct(id:number) {
    this.service.deleteProduct(id);
  }

  updateCart(operation:string, id:number) {
    const product = this.service.findIdProduct(id);
    if (product) {
      if (operation === 'min' && product.qty > 0) {
        product.qty = product.qty -1;
      }
      if (operation === 'add') {
        product.qty = product.qty +1;
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
}
