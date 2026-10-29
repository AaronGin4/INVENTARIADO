import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnularVenta } from './anular-venta';

describe('AnularVenta', () => {
  let component: AnularVenta;
  let fixture: ComponentFixture<AnularVenta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnularVenta],
    }).compileComponents();

    fixture = TestBed.createComponent(AnularVenta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
