import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCvCompletedComponent } from './student-cv-completed.component';

describe('StudentCvCompletedComponent', () => {
  let component: StudentCvCompletedComponent;
  let fixture: ComponentFixture<StudentCvCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCvCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCvCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
