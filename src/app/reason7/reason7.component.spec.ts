import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reason7Component } from './reason7.component';

describe('Reason7Component', () => {
  let component: Reason7Component;
  let fixture: ComponentFixture<Reason7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reason7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reason7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
