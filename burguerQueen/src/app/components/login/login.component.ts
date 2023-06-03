import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface';

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

  constructor(private authLog: AuthService, private router: Router) { }

  //TODO: Modal con msj de error para usuario incorrecto
  errorstatus: boolean = false;
  errorMsg: any = '';

  ngOnInit(): void {
    this.checkLocalStorage
  }

  checkLocalStorage() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['menu/breakfast']);
    }
  }

  onLogin(form:any) {
    const info:LoginI = form
    
    this.authLog.loginByEmail(form).subscribe(data => {
      let dataResp: ResponseI = {
        accessToken:data.accessToken,
        user:data.user.id,
        userRole:data.user.role
      }

      if (dataResp.accessToken) {
        localStorage.setItem('token', dataResp.accessToken);
        if (dataResp.userRole === 'admin') {
          this.router.navigate(['add/waitress']);
        }
        if (dataResp.userRole === 'waitress') {
          this.router.navigate(['menu/breakfast']);
        }
        if (dataResp.userRole === 'chef') {
          this.router.navigate(['kitchen']);
        }

      }

    })

  }

}
