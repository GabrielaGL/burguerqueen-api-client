import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { OrdersService } from 'src/app/services/admin.service';
import { AlertsService } from 'src/app/services/alerts/alerts.service';

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

  constructor(private activerouter: ActivatedRoute, private service: OrdersService, private alerts:AlertsService) { }

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
    this.service.patchProduct(productId, form).subscribe({
      next: (response:any) => {
      this.alerts.responseSuccess('Los datos se están procesando...', 'Los productos se acualizaron con éxito')
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
