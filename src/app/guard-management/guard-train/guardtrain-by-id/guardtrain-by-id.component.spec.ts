import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardTrainByIdComponent } from './guardtrain-by-id.component';

describe('GuardTrainByIdComponent', () => {
  let component: GuardTrainByIdComponent;
  let fixture: ComponentFixture<GuardTrainByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardTrainByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardTrainByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
