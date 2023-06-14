import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { OrdersService } from '../../../services/admin.service';
import { AlertsService } from 'src/app/services/alerts/alerts.service';

import { productsI } from 'src/app/models/products.interface';

@Component({
  selector: 'app-add-products-lunch',
  templateUrl: './add-products-lunch.component.html',
  styleUrls: ['./add-products-lunch.component.sass']
})
export class AddProductsLunchComponent {
  products:productsI[] = [];
  filteredProducts: productsI[] = [];

  newProduct = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    type: new FormControl('Comida'),
    dateEntry: new FormControl(new Date())
  })
   
  constructor(private service:OrdersService, private alerts:AlertsService) {}

  ngOnInit():void {
    this.service.getProducts().subscribe(data => {
      this.products = data
      this.filteredProducts = data.filter(product => product.type === "Comida");
    })
  }

  addProduct(form:any) {
    const info:productsI = form;
    this.service.postProducts(info).subscribe({
      next: (response:any) => {
        this.alerts.responseSuccess('Los datos se están actualizando...', '¡Nuevo producto agregado!')
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
