import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

export const waitressGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const auth: AuthService = inject(AuthService);
  const router = inject(Router);

  const role = auth.getRole()
  
  if (role === 'waitress') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
