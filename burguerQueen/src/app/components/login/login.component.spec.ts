import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginComponent],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log in successfully and navigate to the correct route', () => {
    const loginInfo = {
      email: 'test@example.com',
      password: 'test123'
    };
    const response = {
      accessToken: 'test-token',
      user: {
        id: 'test-user-id',
        role: 'admin'
      }
    };
    spyOn(authService, 'loginByEmail').and.returnValue(of(response));
    component.onLogin(loginInfo);
    expect(authService.loginByEmail).toHaveBeenCalledWith(loginInfo);
    expect(localStorage.getItem('token')).toBe(response.accessToken);
    expect(router.navigate).toHaveBeenCalledWith(['add/waitress']);
  });

});


const authServiceMock = {
  loginByEmail: () => {}
};

const routerMock = {
  navigate: () => {}
};

