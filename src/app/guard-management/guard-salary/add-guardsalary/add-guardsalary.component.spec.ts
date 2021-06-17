import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuardSalaryComponent } from './add-guardsalary.component';

describe('AddGuardSalaryComponent', () => {
  let component: AddGuardSalaryComponent;
  let fixture: ComponentFixture<AddGuardSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGuardSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGuardSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
