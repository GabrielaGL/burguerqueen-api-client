import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { OrdersService } from '../../../services/admin.service';
import { productsI } from 'src/app/models/products.interface';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.sass']
})
export class AddProductsComponent {

  products:productsI[] = [];
  filteredProducts: productsI[] = [];

  newProduct = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    type: new FormControl('Desayuno'),
    dateEntry: new FormControl(new Date())
  })
   
  constructor(private api:OrdersService) {}

  ngOnInit():void {
    this.api.getProducts().subscribe(data => {
      this.products = data
      this.filteredProducts = data.filter(product => product.type === "Desayuno");
    })
  }

  addProductB(form:any) {
    const info:productsI = form;
    this.api.postProducts(info).subscribe(data => {
      //TODO: Agregar Modal
    console.log(data);
    })    
    
  }

}