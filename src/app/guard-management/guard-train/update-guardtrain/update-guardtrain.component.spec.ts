import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGuardTrainComponent } from './update-guardtrain.component';

describe('UpdateGuardTrainComponent', () => {
  let component: UpdateGuardTrainComponent;
  let fixture: ComponentFixture<UpdateGuardTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGuardTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGuardTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
