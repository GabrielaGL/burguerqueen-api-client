import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface';

import { AuthService } from '../../services/auth.service';
import { AlertsService } from 'src/app/services/alerts/alerts.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private authLog: AuthService, private router: Router, private alerts:AlertsService) { }

  //TODO: Modal con msj de error para usuario incorrecto
  errorstatus: boolean = false;
  errorMsg: any = '';

  ngOnInit(): void {

  }


  onLogin(form:any) {
    const info:LoginI = form
    
    this.authLog.loginByEmail(info).subscribe(data => {
      let dataResp: ResponseI = {
        accessToken:data.accessToken,
        user:data.user.id,
        userRole:data.user.role
      }    
      console.log(dataResp.accessToken);
      
    
      if (dataResp.accessToken) {
        localStorage.setItem('token', dataResp.accessToken);
        this.alerts.responseSuccess('Bienvenidx a Burguer Queen 👑', 'Login exitoso')
        if (dataResp.userRole === 'admin') {
          this.router.navigate(['add/waitress']);
        }
        if (dataResp.userRole === 'waitress') {
          this.router.navigate(['menu/breakfast']);
        }
        if (dataResp.userRole === 'chef') {
          this.router.navigate(['kitchen']);
        }

      } else {
        this.alerts.responseError('', 'Error')
      }

    })

  }

}
