import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OrdersService } from '../../services/admin.service';
import { workersI } from 'src/app/models/workers.interface';


@Component({
  selector: 'app-worker-details',
  templateUrl: './worker-details.component.html',
  styleUrls: ['./worker-details.component.sass']
})
export class WorkerDetailsComponent {
  uniqueWorker: workersI[] = [];
  worker:any



  constructor(private activerouter: ActivatedRoute, private api: OrdersService) { }

  ngOnInit(): void {
    let workerId = this.activerouter.snapshot.paramMap.get('id');
    this.api.getWorkerbyId(workerId).subscribe(data => {
      this.worker = data
      console.log(data);

    })
  }
}
