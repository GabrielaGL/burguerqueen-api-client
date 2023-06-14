import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { OrdersService } from '../../../services/admin.service';
import { AlertsService } from 'src/app/services/alerts/alerts.service';

import { workersI } from 'src/app/models/workers.interface';


@Component({
  selector: 'app-worker-details',
  templateUrl: './worker-details.component.html',
  styleUrls: ['./worker-details.component.sass']
})
export class WorkerDetailsComponent {
  uniqueWorker: workersI[] = [];
  worker:any



  constructor(private activerouter: ActivatedRoute, private service: OrdersService, private alerts: AlertsService, private router: Router) { }

  ngOnInit(): void {
    let workerId = this.activerouter.snapshot.paramMap.get('id');
    this.service.getWorkerbyId(workerId).subscribe(data => {
      this.worker = data
    })
  }

  deleteWorker(id:any) {
    this.service.deleteWorkers(id).subscribe({
      next: (response: any) => {
        this.alerts.responseSuccess('Los datos se están actualizando...', 'El trabajadxr fue eliminadx con éxito')
      },
      error: (error) => {
        this.alerts.responseError('Parece que ocurrió un error 😥 El servidor podría estar fallando', 'Error')
      }
    })
    this.router.navigate([])
  }
}
