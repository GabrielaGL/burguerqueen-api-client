import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const auth: AuthService = inject(AuthService);
  const router = inject(Router);

  const role = auth.getRole()
  
  if (role === 'admin') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
