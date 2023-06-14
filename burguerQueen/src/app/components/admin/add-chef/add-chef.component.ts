import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { OrdersService } from '../../../services/admin.service';
import { AlertsService } from 'src/app/services/alerts/alerts.service';

import { workersI } from 'src/app/models/workers.interface';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.sass']
})
export class AddChefComponent {
  workers: workersI[] = [];
  filteredWorkers: workersI[] = [];

  newUser = new FormGroup({
    nickname: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    role: new FormControl('chef'),
    password: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  })


  constructor(private service:OrdersService, private alerts:AlertsService) { }

  ngOnInit():void {
    this.service.getWorkers().subscribe(data => {
      this.workers = data
      this.filteredWorkers = data.filter(worker => worker.role === "chef");
    })
  }

  addUser(form:any) {
    const info:workersI = form
    this.service.postWorker(info).subscribe({
      next: (response: any) => {
        this.alerts.responseSuccess('Los datos se están actualizando...', 'El trabajadxr fue agregadx con éxito')
      },
      error: (error) => {
        this.alerts.responseError('Parece que ocurrió un error 😥 El servidor podría estar fallando', 'Error')
      }
    })    
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }
}
