import { Component } from '@angular/core';

import { OrdersService } from '../../services/admin.service';
import { workersI } from 'src/app/models/workers.interface';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.sass']
})
export class AddAdminComponent {
  workers: workersI[] = [];
  filteredWorkers: workersI[] = [];


  constructor(private api: OrdersService) { }

  ngOnInit(): void {
    this.api.getWorkers().subscribe(data => {
      this.workers = data
      this.filteredWorkers = data.filter(worker => worker.role === "admin");
      return
    })
  }
}
