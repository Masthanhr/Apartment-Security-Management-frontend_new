import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGuardShiftComponent } from './update-guardshift.component';

describe('UpdateGuardShiftComponent', () => {
  let component: UpdateGuardShiftComponent;
  let fixture: ComponentFixture<UpdateGuardShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGuardShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGuardShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
