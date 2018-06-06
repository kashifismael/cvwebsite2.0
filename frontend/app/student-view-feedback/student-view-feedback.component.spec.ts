import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewFeedbackComponent } from './student-view-feedback.component';

describe('StudentViewFeedbackComponent', () => {
  let component: StudentViewFeedbackComponent;
  let fixture: ComponentFixture<StudentViewFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentViewFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
