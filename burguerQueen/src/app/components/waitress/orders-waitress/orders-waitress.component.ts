import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { OrdersService } from 'src/app/services/admin.service';
import { AlertsService } from 'src/app/services/alerts/alerts.service';

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


  constructor(private service: OrdersService, private alerts: AlertsService) { }

  ngOnInit(): void {
    this.service.getOrders().subscribe(data => {
      this.filteredOrders = data.filter(order => order.status === "pending");
      this.filteredOrdersReady = data.filter(order => order.status === "ready")
      console.log(this.filteredOrders);
    })
  }


  finishOrder(id: any) {
    this.service.deleteOrders(id).subscribe({
      next: (response: any) => {
        this.alerts.responseSuccess('Otro clientx feliz en Burguer Queen 👌', '¡La orden fue entregada!')
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
