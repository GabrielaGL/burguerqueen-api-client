import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerDetailsComponent } from './worker-details.component';

describe('WorkerDetailsComponent', () => {
  let component: WorkerDetailsComponent;
  let fixture: ComponentFixture<WorkerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerDetailsComponent]
    });
    fixture = TestBed.createComponent(WorkerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
