import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardShiftSComponent } from './guard-shift.component';

describe('GuardShiftSComponent', () => {
  let component: GuardShiftSComponent;
  let fixture: ComponentFixture<GuardShiftSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardShiftSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardShiftSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
