import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardShiftByNameComponent } from './guardshift-by-name.component';

describe('GuardShiftByNameComponent', () => {
  let component: GuardShiftByNameComponent;
  let fixture: ComponentFixture<GuardShiftByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardShiftByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardShiftByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
