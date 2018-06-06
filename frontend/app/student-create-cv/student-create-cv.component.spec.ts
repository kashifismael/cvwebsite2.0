import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCreateCvComponent } from './student-create-cv.component';

describe('StudentCreateCvComponent', () => {
  let component: StudentCreateCvComponent;
  let fixture: ComponentFixture<StudentCreateCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCreateCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCreateCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
