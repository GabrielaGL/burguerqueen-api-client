import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { OrdersService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.sass']
})
export class EditWorkerComponent {

  editForm = new FormGroup({
    nickname: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    role: new FormControl(''),
    image: new FormControl('')
  })

  constructor(private activerouter: ActivatedRoute, private service: OrdersService) { }

  ngOnInit(): void {
    let workerId = this.activerouter.snapshot.paramMap.get('id');
    this.service.getWorkerbyId(workerId).subscribe(data => {
      this.editForm.setValue({
        'nickname': data.nickname,
        'name': data.name,
        'email': data.email,
        'role': data.role,
        'image': data.image
      })
      console.log(data);
    })
  }

  postForm(form:any) {
    let workerId = this.activerouter.snapshot.paramMap.get('id');
    this.service.patchWorker(workerId, form).subscribe(data => {
      console.log(data);
      //TODO: Agregar modal para indicar que se editó
    })
  }
}
