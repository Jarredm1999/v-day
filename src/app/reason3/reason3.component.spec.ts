import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reason3Component } from './reason3.component';

describe('Reason3Component', () => {
  let component: Reason3Component;
  let fixture: ComponentFixture<Reason3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reason3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reason3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
