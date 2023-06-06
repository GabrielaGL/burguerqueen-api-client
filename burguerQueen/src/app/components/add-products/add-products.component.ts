import { Component, OnInit } from '@angular/core';

import { OrdersService } from '../../services/admin.service';
import { productsI } from 'src/app/models/products.interface';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.sass']
})
export class AddProductsComponent {

  products:productsI[] = [];
  filteredProducts: productsI[] = [];
   
  constructor(private api:OrdersService) {}

  ngOnInit():void {
    this.api.getProducts().subscribe(data => {
      this.products = data
      this.filteredProducts = data.filter(product => product.type === "Desayuno");     
      return
    })
  }

}