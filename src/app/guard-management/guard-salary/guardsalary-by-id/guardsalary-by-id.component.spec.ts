import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardSalaryByIdComponent } from './guardsalary-by-id.component';

describe('GuardSalaryByIdComponent', () => {
  let component: GuardSalaryByIdComponent;
  let fixture: ComponentFixture<GuardSalaryByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardSalaryByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardSalaryByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
