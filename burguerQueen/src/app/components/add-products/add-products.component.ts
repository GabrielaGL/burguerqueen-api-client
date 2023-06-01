import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/admin.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.sass']
})
export class AddProductsComponent {
  constructor(private api:OrdersService) {}

  ngOnInit():void {
    this.api.getProducts().subscribe(data => {
      console.log(data);
      return
    })
  }

}