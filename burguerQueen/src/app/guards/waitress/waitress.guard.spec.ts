import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { waitressGuard } from './waitress.guard';

describe('waitressGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => waitressGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
