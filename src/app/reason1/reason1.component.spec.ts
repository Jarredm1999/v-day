import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reason1Component } from './reason1.component';

describe('Reason1Component', () => {
  let component: Reason1Component;
  let fixture: ComponentFixture<Reason1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reason1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reason1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
