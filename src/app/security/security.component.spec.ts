import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityMComponent } from './security.component';

describe('SecurityMComponent', () => {
  let component: SecurityMComponent;
  let fixture: ComponentFixture<SecurityMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
