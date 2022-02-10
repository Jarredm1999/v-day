import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reason12Component } from './reason12.component';

describe('Reason12Component', () => {
  let component: Reason12Component;
  let fixture: ComponentFixture<Reason12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reason12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reason12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
