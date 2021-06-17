import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGuardSalaryComponent } from './all-guardsalary.component';

describe('AllGuardSalaryComponent', () => {
  let component: AllGuardSalaryComponent;
  let fixture: ComponentFixture<AllGuardSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGuardSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGuardSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
