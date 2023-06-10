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

  orders:ordersI[] = [];
  filteredOrders:ordersI[] = [];

  newOrder = new FormGroup({
    table: new FormControl('', Validators.required),
    client: new FormControl('', Validators.required),
    
  })

  constructor(private api:OrdersService) {}

  ngOnInit():void {
    this.api.getOrders().subscribe(data => {
      this.orders = data
      this.filteredOrders = data.filter(order => order.status === "pending");
      console.log(data);
      
    })
  }

}
