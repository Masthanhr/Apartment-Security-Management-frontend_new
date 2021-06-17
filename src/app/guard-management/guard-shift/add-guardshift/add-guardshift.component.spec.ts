import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuardShiftComponent } from './add-guardshift.component';

describe('AddGuardShiftComponent', () => {
  let component: AddGuardShiftComponent;
  let fixture: ComponentFixture<AddGuardShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGuardShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGuardShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
