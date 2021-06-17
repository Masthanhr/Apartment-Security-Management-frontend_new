import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGuardShiftComponent } from './all-guardshift.component';

describe('AllGuardShiftComponent', () => {
  let component: AllGuardShiftComponent;
  let fixture: ComponentFixture<AllGuardShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGuardShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGuardShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
