import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reason4Component } from './reason4.component';

describe('Reason4Component', () => {
  let component: Reason4Component;
  let fixture: ComponentFixture<Reason4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reason4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reason4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
