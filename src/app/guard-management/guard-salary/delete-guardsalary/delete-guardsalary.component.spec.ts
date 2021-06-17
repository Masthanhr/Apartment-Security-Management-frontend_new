import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGuardSalaryComponent } from './delete-guardsalary.component';

describe('DeleteGuardSalaryComponent', () => {
  let component: DeleteGuardSalaryComponent;
  let fixture: ComponentFixture<DeleteGuardSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteGuardSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGuardSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
