import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersWaitressComponent } from './orders-waitress.component';

describe('OrdersWaitressComponent', () => {
  let component: OrdersWaitressComponent;
  let fixture: ComponentFixture<OrdersWaitressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersWaitressComponent]
    });
    fixture = TestBed.createComponent(OrdersWaitressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
