import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCvAllComponent } from './student-cv-all.component';

describe('StudentCvAllComponent', () => {
  let component: StudentCvAllComponent;
  let fixture: ComponentFixture<StudentCvAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCvAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCvAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
