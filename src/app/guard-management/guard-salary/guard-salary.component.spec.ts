import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardSalarySComponent } from './guard-salary.component';

describe('GuardSalarySComponent', () => {
  let component: GuardSalarySComponent;
  let fixture: ComponentFixture<GuardSalarySComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardSalarySComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardSalarySComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
