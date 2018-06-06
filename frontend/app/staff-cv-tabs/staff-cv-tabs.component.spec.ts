import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCvTabsComponent } from './staff-cv-tabs.component';

describe('StaffCvTabsComponent', () => {
  let component: StaffCvTabsComponent;
  let fixture: ComponentFixture<StaffCvTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffCvTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffCvTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
