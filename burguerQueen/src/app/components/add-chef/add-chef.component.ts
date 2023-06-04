import { Component } from '@angular/core';

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


  constructor(private api: OrdersService) { }

  ngOnInit(): void {
    this.api.getWorkers().subscribe(data => {
      this.workers = data
      this.filteredWorkers = data.filter(worker => worker.role === "chef");
      return
    })
  }
}
