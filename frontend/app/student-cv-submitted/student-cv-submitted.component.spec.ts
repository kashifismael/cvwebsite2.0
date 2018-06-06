import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCvSubmittedComponent } from './student-cv-submitted.component';

describe('StudentCvSubmittedComponent', () => {
  let component: StudentCvSubmittedComponent;
  let fixture: ComponentFixture<StudentCvSubmittedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCvSubmittedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCvSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
