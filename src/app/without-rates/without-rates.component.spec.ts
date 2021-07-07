import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutRatesComponent } from './without-rates.component';

describe('WithoutRatesComponent', () => {
  let component: WithoutRatesComponent;
  let fixture: ComponentFixture<WithoutRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
