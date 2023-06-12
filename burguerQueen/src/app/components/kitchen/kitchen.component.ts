import { Component } from '@angular/core';

import { OrdersService } from 'src/app/services/admin.service';
import { ordersI } from 'src/app/models/orders.interface';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.sass']
})
export class KitchenComponent {
  orders:ordersI[] = [];
  filteredOrders: ordersI[] = [];
  filteredOrdersReady: ordersI[] = [];

  constructor(private api:OrdersService) {}

  ngOnInit():void {
    this.api.getOrders().subscribe(data => {
      this.filteredOrders = data.filter(order => order.status === "pending");
      this.filteredOrdersReady = data.filter(order => order.status === "ready")
      this.orders = data
      console.log(data);
      
    })
  }
}
