import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGuardTrainComponent } from './all-guardtrain.component';

describe('AllGuardTrainComponent', () => {
  let component: AllGuardTrainComponent;
  let fixture: ComponentFixture<AllGuardTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGuardTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGuardTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
