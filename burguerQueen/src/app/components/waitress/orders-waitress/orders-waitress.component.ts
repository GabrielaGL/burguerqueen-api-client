import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { OrdersService } from 'src/app/services/admin.service';

import { ordersI } from 'src/app/models/orders.interface';

@Component({
  selector: 'app-orders-waitress',
  templateUrl: './orders-waitress.component.html',
  styleUrls: ['./orders-waitress.component.sass']
})
export class OrdersWaitressComponent {

  orders: ordersI[] = [];
  filteredOrders: ordersI[] = [];
  filteredOrdersReady: ordersI[] = [];


  newOrder = new FormGroup({
    table: new FormControl('', Validators.required),
    client: new FormControl('', Validators.required),

  })

  constructor(private service: OrdersService) { }

  ngOnInit(): void {
    this.service.getOrders().subscribe(data => {
      this.filteredOrders = data.filter(order => order.status === "pending");
      this.filteredOrdersReady = data.filter(order => order.status === "ready")
      console.log(this.filteredOrders);
    })
  }

  totalCart() {
    const result = this.service.totalCart();
    return result;
  }

}
