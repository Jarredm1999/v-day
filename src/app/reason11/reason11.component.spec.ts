import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reason11Component } from './reason11.component';

describe('Reason11Component', () => {
  let component: Reason11Component;
  let fixture: ComponentFixture<Reason11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reason11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reason11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
