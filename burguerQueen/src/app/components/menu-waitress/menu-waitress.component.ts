import { Component } from '@angular/core';

import { OrdersService } from '../../services/admin.service';
import { productsI } from 'src/app/models/products.interface';

@Component({
  selector: 'app-menu-waitress',
  templateUrl: './menu-waitress.component.html',
  styleUrls: ['./menu-waitress.component.sass']
})
export class MenuWaitressComponent {
  
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
