import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffManageCvAllComponent } from './staff-manage-cv-all.component';

describe('StaffManageCvAllComponent', () => {
  let component: StaffManageCvAllComponent;
  let fixture: ComponentFixture<StaffManageCvAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffManageCvAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffManageCvAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
