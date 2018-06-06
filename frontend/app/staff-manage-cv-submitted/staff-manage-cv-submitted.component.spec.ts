import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffManageCvSubmittedComponent } from './staff-manage-cv-submitted.component';

describe('StaffManageCvSubmittedComponent', () => {
  let component: StaffManageCvSubmittedComponent;
  let fixture: ComponentFixture<StaffManageCvSubmittedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffManageCvSubmittedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffManageCvSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
