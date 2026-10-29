import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiguracionGeneral } from './configuracion-general';

describe('ConfiguracionGeneral', () => {
  let component: ConfiguracionGeneral;
  let fixture: ComponentFixture<ConfiguracionGeneral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguracionGeneral],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionGeneral);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
