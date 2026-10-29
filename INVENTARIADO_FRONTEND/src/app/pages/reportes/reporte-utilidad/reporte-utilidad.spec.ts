import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReporteUtilidad } from './reporte-utilidad';

describe('ReporteUtilidad', () => {
  let component: ReporteUtilidad;
  let fixture: ComponentFixture<ReporteUtilidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteUtilidad],
    }).compileComponents();

    fixture = TestBed.createComponent(ReporteUtilidad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
