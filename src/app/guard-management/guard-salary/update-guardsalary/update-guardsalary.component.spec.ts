import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGuardSalaryComponent } from './update-guardsalary.component';

describe('UpdateGuardSalaryComponent', () => {
  let component: UpdateGuardSalaryComponent;
  let fixture: ComponentFixture<UpdateGuardSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGuardSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGuardSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
