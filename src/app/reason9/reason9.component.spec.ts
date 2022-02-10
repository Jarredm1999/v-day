import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reason9Component } from './reason9.component';

describe('Reason9Component', () => {
  let component: Reason9Component;
  let fixture: ComponentFixture<Reason9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reason9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reason9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
