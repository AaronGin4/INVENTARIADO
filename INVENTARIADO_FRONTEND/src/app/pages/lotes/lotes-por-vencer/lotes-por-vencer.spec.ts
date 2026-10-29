import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LotesPorVencer } from './lotes-por-vencer';

describe('LotesPorVencer', () => {
  let component: LotesPorVencer;
  let fixture: ComponentFixture<LotesPorVencer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LotesPorVencer],
    }).compileComponents();

    fixture = TestBed.createComponent(LotesPorVencer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
