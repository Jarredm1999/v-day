import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reason5Component } from './reason5.component';

describe('Reason5Component', () => {
  let component: Reason5Component;
  let fixture: ComponentFixture<Reason5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reason5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reason5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
