import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor( private toast:ToastrService) { }

  responseSuccess(text:string, tittle:string) {
    this.toast.success(text, tittle)
  }

  responseError(text:string, tittle:string) {
    this.toast.error(text, tittle)
  }
}

