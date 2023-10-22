import { Component } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.sass'],
})
export class LogoutButtonComponent {

  constructor(private service: AuthService) {}

  onClick(): void {
    this.service.logout();
  }
}
