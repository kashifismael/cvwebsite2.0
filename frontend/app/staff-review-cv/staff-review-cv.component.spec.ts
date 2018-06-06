import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffReviewCvComponent } from './staff-review-cv.component';

describe('StaffReviewCvComponent', () => {
  let component: StaffReviewCvComponent;
  let fixture: ComponentFixture<StaffReviewCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffReviewCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffReviewCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
