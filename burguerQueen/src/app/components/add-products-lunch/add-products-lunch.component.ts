import { Component } from '@angular/core';

import { OrdersService } from '../../services/admin.service';
import { productsI } from 'src/app/models/products.interface';

@Component({
  selector: 'app-add-products-lunch',
  templateUrl: './add-products-lunch.component.html',
  styleUrls: ['./add-products-lunch.component.sass']
})
export class AddProductsLunchComponent {
  products:productsI[] = [];
  filteredProducts: productsI[] = [];
   
  constructor(private api:OrdersService) {}

  ngOnInit():void {
    this.api.getProducts().subscribe(data => {
      this.products = data
      this.filteredProducts = data.filter(product => product.type === "Comida");     
      return
    })
  }
}
