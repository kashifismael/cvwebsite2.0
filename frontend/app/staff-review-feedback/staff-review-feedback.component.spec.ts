import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffReviewFeedbackComponent } from './staff-review-feedback.component';

describe('StaffReviewFeedbackComponent', () => {
  let component: StaffReviewFeedbackComponent;
  let fixture: ComponentFixture<StaffReviewFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffReviewFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffReviewFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
