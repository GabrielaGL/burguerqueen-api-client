import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, CanActivateFn, mapToCanActivate } from '@angular/router';

import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface';

import { AuthService } from '../../services/auth.service';
import { AlertsService } from 'src/app/services/alerts/alerts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private authLog: AuthService,
    private router: Router,
    private alerts: AlertsService
  ) {}

  //TODO: Modal con msj de error para usuario incorrecto
  errorstatus: boolean = false;
  errorMsg: any = '';

  ngOnInit(): void {}

  onLogin(form: any) {
    const info: LoginI = form;

    this.authLog.loginByEmail(info).subscribe({
      next: (response: any) => {
        let dataResp: ResponseI = {
          accessToken: response.accessToken,
          user: response.user.id,
          userRole: response.user.role,
        };
        localStorage.setItem('token', dataResp.accessToken);
        localStorage.setItem('role', dataResp.userRole);

        this.authLog.getRole()
        console.log(this.authLog.getRole());
        

        this.alerts.responseSuccess(
          '👑 Bienvenidx a Burguer Queen',
          'Login exitoso'
        );
        if (dataResp.userRole === 'admin') {
          this.router.navigate(['/add/waitress']);
        }
        if (dataResp.userRole === 'waitress') {
          this.router.navigate(['menu/breakfast']);
        }
        if (dataResp.userRole === 'chef') {
          this.router.navigate(['kitchen']);
        }
      },
      error: (error) => {
        this.alerts.responseError(
          'Parece que tu usuario o contraseña es incorrecto',
          'Error'
        );
      },
    });
  }
}
