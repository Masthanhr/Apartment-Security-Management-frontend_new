import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardTrainByNameComponent } from './guardtrain-by-name.component';

describe('GuardTrainByNameComponent', () => {
  let component: GuardTrainByNameComponent;
  let fixture: ComponentFixture<GuardTrainByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardTrainByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardTrainByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
