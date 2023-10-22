import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardLoginGuard } from './guard-login.guard';

describe('guardLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
