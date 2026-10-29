import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiguracionImpuestos } from './configuracion-impuestos';

describe('ConfiguracionImpuestos', () => {
  let component: ConfiguracionImpuestos;
  let fixture: ComponentFixture<ConfiguracionImpuestos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguracionImpuestos],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionImpuestos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
