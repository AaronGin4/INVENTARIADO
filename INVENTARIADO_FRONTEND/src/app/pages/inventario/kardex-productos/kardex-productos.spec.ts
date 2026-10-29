import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KardexProductos } from './kardex-productos';

describe('KardexProductos', () => {
  let component: KardexProductos;
  let fixture: ComponentFixture<KardexProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KardexProductos],
    }).compileComponents();

    fixture = TestBed.createComponent(KardexProductos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
