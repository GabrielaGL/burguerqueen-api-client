import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';

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

  constructor(private authLog:AuthService, private router:Router) {}

  errorstatus:boolean = false;
  errorMsg:any = '';

  ngOnInit(): void {
    this.checkLocalStorage
  }

  checkLocalStorage() {
    if(localStorage.getItem('accessToken')) {
      this.router.navigate(['menu/breakfast']);
    }
  }

  onLogin(form: LoginI) {
    this.authLog.loginByEmail(form).subscribe(data => {
      let dataResp:ResponseI = data;
      console.log('Este es data', data);
      
      if(dataResp.accessToken) {
        localStorage.setItem('token', dataResp.accessToken);
        this.router.navigate(['menu/breakfast']);
      } else {
        this.errorstatus = true;
        this.errorMsg = dataResp.status.errorMsg;
      }
      
    })
    
  }

}
