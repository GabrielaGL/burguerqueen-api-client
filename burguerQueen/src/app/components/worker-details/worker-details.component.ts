import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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



  constructor(private activerouter: ActivatedRoute, private router: Router, private api: OrdersService) { }

  ngOnInit(): void {
    let workerid = this.activerouter.snapshot.paramMap.get('id');
    this.api.getSingleWorker(workerid).subscribe(data => {
      this.worker = data
      console.log(data);

    })
  }
}
