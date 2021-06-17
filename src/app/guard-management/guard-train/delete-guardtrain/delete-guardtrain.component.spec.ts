import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGuardTrainComponent } from './delete-guardtrain.component';

describe('DeleteGuardTrainComponent', () => {
  let component: DeleteGuardTrainComponent;
  let fixture: ComponentFixture<DeleteGuardTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteGuardTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGuardTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
