import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { OrdersService } from '../../services/admin.service';
import { AlertsService } from 'src/app/services/alerts/alerts.service';

import { workersI } from 'src/app/models/workers.interface';
import { responsepostI } from 'src/app/models/responsepost';

@Component({
  selector: 'app-add-waitress',
  templateUrl: './add-waitress.component.html',
  styleUrls: ['./add-waitress.component.sass']
})
export class AddWaitressComponent {
  workers: workersI[] = [];
  filteredWorkers: workersI[] = [];

  newUser = new FormGroup({
    nickname: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    role: new FormControl('waitress'),
    password: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)

  })


  constructor(private api: OrdersService, private alert:AlertsService) { }

  ngOnInit(): void {
    this.api.getWorkers().subscribe(data => {
      this.workers = data
      this.filteredWorkers = data.filter(worker => worker.role === "waitress");
    })
  }

  addUser(form:any) {
    const info:workersI = form
    this.api.postWorker(info).subscribe(data => {
      let resp:responsepostI = data;
      console.log('Algo', resp.result);
      //FIXME: Response no funciona
      
      if (resp.status == 'ok') {
        this.alert.responseSuccess('Empleadx agregadx a Burguer Queen 👑', '¡Todo listo!')
      } else {
        this.alert.responseError(resp.result.error_msg, 'Error')
      }
    })    
  }
}
