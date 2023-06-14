import { Component } from '@angular/core';

import { OrdersService } from 'src/app/services/admin.service';
import { AlertsService } from 'src/app/services/alerts/alerts.service';

import { ordersI } from 'src/app/models/orders.interface';

import { Router } from '@angular/router';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.sass']
})
export class KitchenComponent {
  orders:ordersI[] = [];
  filteredOrders: ordersI[] = [];
  filteredOrdersReady: ordersI[] = [];

  statusR:{} = {status: 'ready'}
  statusP:{} = {status: 'pending'}


  constructor(private service:OrdersService, private alerts:AlertsService, private router: Router) {}

  ngOnInit():void {
    this.service.getOrders().subscribe(data => {
      this.filteredOrders = data.filter(order => order.status === "pending");
      this.filteredOrdersReady = data.filter(order => order.status === "ready")
      this.orders = data
      console.log(data);      
    })
  }

  statusReady(id:any) {   
    this.service.patchOrder(id, this.statusR).subscribe({
      next: (response:any) => {
        this.alerts.responseSuccess('Pronto vendrán a recogerla, gracias por avisarnos 🍔', '¡La orden está lista!');
        
      },
      error: (error) => {
        this.alerts.responseError('Parece que ocurrió un error 😥 Acude con tu administrador, el servidor podría estar fallando', 'Error');
      }
    })
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }

  statusPending(id:any) {
    this.service.patchOrder(id, this.statusP).subscribe({
      next: (response:any) => {
        this.alerts.responseSuccess('¡No te preocupes! Va de vuelta a la cocina', 'Parece que hubo un error y esta orden no está lista')
      },
      error: (error) => {
        this.alerts.responseError('Parece que ocurrió un error 😥 Acude con tu administrador, el servidor podría estar fallando', 'Error')
      }
    })
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }
 
}
