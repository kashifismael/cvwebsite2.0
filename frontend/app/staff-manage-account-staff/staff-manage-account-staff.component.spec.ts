import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffManageAccountStaffComponent } from './staff-manage-account-staff.component';

describe('StaffManageAccountStaffComponent', () => {
  let component: StaffManageAccountStaffComponent;
  let fixture: ComponentFixture<StaffManageAccountStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffManageAccountStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffManageAccountStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
