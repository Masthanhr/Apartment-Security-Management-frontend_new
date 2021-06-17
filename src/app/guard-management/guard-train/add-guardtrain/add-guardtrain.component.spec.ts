import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuardTrainComponent } from './add-guardtrain.component';

describe('AddGuardTrainComponent', () => {
  let component: AddGuardTrainComponent;
  let fixture: ComponentFixture<AddGuardTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGuardTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGuardTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
