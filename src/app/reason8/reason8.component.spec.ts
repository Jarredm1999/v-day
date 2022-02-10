import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reason8Component } from './reason8.component';

describe('Reason8Component', () => {
  let component: Reason8Component;
  let fixture: ComponentFixture<Reason8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reason8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reason8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
