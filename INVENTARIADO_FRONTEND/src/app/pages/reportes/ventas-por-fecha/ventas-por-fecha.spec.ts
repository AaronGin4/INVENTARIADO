import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VentasPorFecha } from './ventas-por-fecha';

describe('VentasPorFecha', () => {
  let component: VentasPorFecha;
  let fixture: ComponentFixture<VentasPorFecha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasPorFecha],
    }).compileComponents();

    fixture = TestBed.createComponent(VentasPorFecha);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
