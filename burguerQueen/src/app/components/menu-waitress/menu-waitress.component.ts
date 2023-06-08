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
    
  })

  constructor(private api:OrdersService, private activerouter:ActivatedRoute, private service:OrdersService) {}

  ngOnInit():void {
    this.api.getProducts().subscribe(data => {
      this.products = data
      this.filteredProducts = data.filter(product => product.type === "Desayuno");
    })
  }

  addToCart(product:productsI) {
    return this.service.addProduct(product);
  }

}
