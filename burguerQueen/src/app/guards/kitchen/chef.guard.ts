import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

export const chefGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const auth: AuthService = inject(AuthService);
  const router = inject(Router);

  const role = auth.getRole()
  
  if (role === 'chef') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
