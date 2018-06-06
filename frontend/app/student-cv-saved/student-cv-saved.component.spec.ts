import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCvSavedComponent } from './student-cv-saved.component';

describe('StudentCvSavedComponent', () => {
  let component: StudentCvSavedComponent;
  let fixture: ComponentFixture<StudentCvSavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCvSavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCvSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
