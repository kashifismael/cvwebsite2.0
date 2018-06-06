import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffFeedbackTabsComponent } from './staff-feedback-tabs.component';

describe('StaffFeedbackTabsComponent', () => {
  let component: StaffFeedbackTabsComponent;
  let fixture: ComponentFixture<StaffFeedbackTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffFeedbackTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffFeedbackTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
