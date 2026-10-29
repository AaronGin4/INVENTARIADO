import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VentasPorUsuario } from './ventas-por-usuario';

describe('VentasPorUsuario', () => {
  let component: VentasPorUsuario;
  let fixture: ComponentFixture<VentasPorUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasPorUsuario],
    }).compileComponents();

    fixture = TestBed.createComponent(VentasPorUsuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
