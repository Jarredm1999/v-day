import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reason10Component } from './reason10.component';

describe('Reason10Component', () => {
  let component: Reason10Component;
  let fixture: ComponentFixture<Reason10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reason10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reason10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
