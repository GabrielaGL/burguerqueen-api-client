import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWaitressComponent } from './add-waitress.component';

describe('AddWaitressComponent', () => {
  let component: AddWaitressComponent;
  let fixture: ComponentFixture<AddWaitressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWaitressComponent]
    });
    fixture = TestBed.createComponent(AddWaitressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
