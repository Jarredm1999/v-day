import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reason13Component } from './reason13.component';

describe('Reason13Component', () => {
  let component: Reason13Component;
  let fixture: ComponentFixture<Reason13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reason13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reason13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
