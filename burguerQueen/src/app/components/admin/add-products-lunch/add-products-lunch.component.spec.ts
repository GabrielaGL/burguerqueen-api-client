import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductsLunchComponent } from './add-products-lunch.component';

describe('AddProductsLunchComponent', () => {
  let component: AddProductsLunchComponent;
  let fixture: ComponentFixture<AddProductsLunchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductsLunchComponent]
    });
    fixture = TestBed.createComponent(AddProductsLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
