import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerSearchCvComponent } from './employer-search-cv.component';

describe('EmployerSearchCvComponent', () => {
  let component: EmployerSearchCvComponent;
  let fixture: ComponentFixture<EmployerSearchCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerSearchCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerSearchCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
