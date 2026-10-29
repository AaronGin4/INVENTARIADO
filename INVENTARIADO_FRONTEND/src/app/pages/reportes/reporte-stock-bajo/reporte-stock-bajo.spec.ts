import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReporteStockBajo } from './reporte-stock-bajo';

describe('ReporteStockBajo', () => {
  let component: ReporteStockBajo;
  let fixture: ComponentFixture<ReporteStockBajo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteStockBajo],
    }).compileComponents();

    fixture = TestBed.createComponent(ReporteStockBajo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
