import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuWaitressComponent } from './menu-waitress.component';

describe('MenuWaitressComponent', () => {
  let component: MenuWaitressComponent;
  let fixture: ComponentFixture<MenuWaitressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuWaitressComponent]
    });
    fixture = TestBed.createComponent(MenuWaitressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
