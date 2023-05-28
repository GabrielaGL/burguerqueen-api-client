import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLunchWaitressComponent } from './menu-lunch-waitress.component';

describe('MenuLunchWaitressComponent', () => {
  let component: MenuLunchWaitressComponent;
  let fixture: ComponentFixture<MenuLunchWaitressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuLunchWaitressComponent]
    });
    fixture = TestBed.createComponent(MenuLunchWaitressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
