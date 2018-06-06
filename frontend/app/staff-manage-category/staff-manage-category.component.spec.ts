import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffManageCategoryComponent } from './staff-manage-category.component';

describe('StaffManageCategoryComponent', () => {
  let component: StaffManageCategoryComponent;
  let fixture: ComponentFixture<StaffManageCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffManageCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffManageCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
