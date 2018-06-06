import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerViewCvComponent } from './employer-view-cv.component';

describe('EmployerViewCvComponent', () => {
  let component: EmployerViewCvComponent;
  let fixture: ComponentFixture<EmployerViewCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerViewCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerViewCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
