import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewCvComponent } from './student-view-cv.component';

describe('StudentViewCvComponent', () => {
  let component: StudentViewCvComponent;
  let fixture: ComponentFixture<StudentViewCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentViewCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
