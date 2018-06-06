import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCvRecFeedbackComponent } from './student-cv-rec-feedback.component';

describe('StudentCvRecFeedbackComponent', () => {
  let component: StudentCvRecFeedbackComponent;
  let fixture: ComponentFixture<StudentCvRecFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCvRecFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCvRecFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
