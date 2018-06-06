import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffManageAccountEmployerComponent } from './staff-manage-account-employer.component';

describe('StaffManageAccountEmployerComponent', () => {
  let component: StaffManageAccountEmployerComponent;
  let fixture: ComponentFixture<StaffManageAccountEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffManageAccountEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffManageAccountEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
