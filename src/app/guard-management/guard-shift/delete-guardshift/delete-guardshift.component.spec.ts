import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGuardShiftComponent } from './delete-guardshift.component';

describe('DeleteGuardShiftComponent', () => {
  let component: DeleteGuardShiftComponent;
  let fixture: ComponentFixture<DeleteGuardShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteGuardShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGuardShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
