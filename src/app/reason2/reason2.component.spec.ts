import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reason2Component } from './reason2.component';

describe('Reason2Component', () => {
  let component: Reason2Component;
  let fixture: ComponentFixture<Reason2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reason2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reason2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
