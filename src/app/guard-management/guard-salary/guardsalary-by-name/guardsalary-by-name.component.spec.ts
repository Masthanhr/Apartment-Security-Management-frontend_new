import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardSalaryByNameComponent } from './guardsalary-by-name.component';

describe('GuardSalaryByNameComponent', () => {
  let component: GuardSalaryByNameComponent;
  let fixture: ComponentFixture<GuardSalaryByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardSalaryByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardSalaryByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
