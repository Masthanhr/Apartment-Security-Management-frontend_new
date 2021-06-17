import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardShiftByIdComponent } from './guardshift-by-id.component';

describe('GuardShiftByIdComponent', () => {
  let component: GuardShiftByIdComponent;
  let fixture: ComponentFixture<GuardShiftByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardShiftByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardShiftByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
