import { Component } from '@angular/core';

import { OrdersService } from '../../../services/admin.service';
import { productsI } from 'src/app/models/products.interface';

@Component({
  selector: 'app-menu-lunch-waitress',
  templateUrl: './menu-lunch-waitress.component.html',
  styleUrls: ['./menu-lunch-waitress.component.sass']
})
export class MenuLunchWaitressComponent {

  products:productsI[] = [];
  filteredProducts: productsI[] = [];

  constructor(private service:OrdersService) {}

  ngOnInit():void {
    this.service.getProducts().subscribe(data => {
      this.products = data
      this.filteredProducts = data.filter(product => product.type === "Comida");     
      return
    })
  }

}
