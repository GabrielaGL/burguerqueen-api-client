import { Component } from '@angular/core';

import { OrdersService } from '../../services/admin.service';
import { workersI } from 'src/app/models/workers.interface';

@Component({
  selector: 'app-add-waitress',
  templateUrl: './add-waitress.component.html',
  styleUrls: ['./add-waitress.component.sass']
})
export class AddWaitressComponent {
  workers: workersI[] = [];
  filteredWorkers: workersI[] = [];


  constructor(private api: OrdersService) { }

  ngOnInit(): void {
    this.api.getWorkers().subscribe(data => {
      this.workers = data
      this.filteredWorkers = data.filter(worker => worker.role === "waitress");
      return
    })
  }
}
