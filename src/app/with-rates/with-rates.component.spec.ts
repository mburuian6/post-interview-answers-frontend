import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithRatesComponent } from './with-rates.component';

describe('WithRatesComponent', () => {
  let component: WithRatesComponent;
  let fixture: ComponentFixture<WithRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
