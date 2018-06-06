import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCvTabsComponent } from './student-cv-tabs.component';

describe('StudentCvTabsComponent', () => {
  let component: StudentCvTabsComponent;
  let fixture: ComponentFixture<StudentCvTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCvTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCvTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
