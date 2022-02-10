import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reason6Component } from './reason6.component';

describe('Reason6Component', () => {
  let component: Reason6Component;
  let fixture: ComponentFixture<Reason6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reason6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reason6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
