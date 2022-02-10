import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reason14Component } from './reason14.component';

describe('Reason14Component', () => {
  let component: Reason14Component;
  let fixture: ComponentFixture<Reason14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reason14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reason14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
