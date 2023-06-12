import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { OrdersService } from 'src/app/services/admin.service';
import { productsI } from 'src/app/models/products.interface';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.sass']
})
export class EditProductsComponent {

  editForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(),
    image: new FormControl(''),
    type: new FormControl('')
  })

  constructor(private activerouter: ActivatedRoute, private service: OrdersService) { }

  ngOnInit(): void {
    let productId = this.activerouter.snapshot.paramMap.get('id');
    this.service.getProductById(productId).subscribe(data => {
      this.editForm.setValue({
        'name': data.name,
        'price': data.price,
        'image': data.image,
        'type': data.type
      })
    })
  }

  postForm(form:any) {
    let productId = this.activerouter.snapshot.paramMap.get('id');
    this.service.patchProduct(productId, form).subscribe(data => {
      console.log(data);
      //TODO: Agregar modal
    })
  }

}
