import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEditCvComponent } from './student-edit-cv.component';

describe('StudentEditCvComponent', () => {
  let component: StudentEditCvComponent;
  let fixture: ComponentFixture<StudentEditCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEditCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEditCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
