import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffManageAccountTabsComponent } from './staff-manage-account-tabs.component';

describe('StaffManageAccountTabsComponent', () => {
  let component: StaffManageAccountTabsComponent;
  let fixture: ComponentFixture<StaffManageAccountTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffManageAccountTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffManageAccountTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
