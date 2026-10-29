import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalidaInventario } from './salida-inventario';

describe('SalidaInventario', () => {
  let component: SalidaInventario;
  let fixture: ComponentFixture<SalidaInventario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalidaInventario],
    }).compileComponents();

    fixture = TestBed.createComponent(SalidaInventario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
