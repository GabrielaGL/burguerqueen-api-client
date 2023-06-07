import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { OrdersService } from '../../services/admin.service';
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


  constructor(private api:OrdersService) { }

  ngOnInit():void {
    this.api.getWorkers().subscribe(data => {
      this.workers = data
      this.filteredWorkers = data.filter(worker => worker.role === "chef");
    })
  }

  addUser(form:any) {
    const info:workersI = form
    this.api.postWorker(info).subscribe(data => {
      //TODO: Agregar modal que muestre que resultó
    console.log(data);
    })    
  }
}
