import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiguracionSeriesCorrelativos } from './configuracion-series-correlativos';

describe('ConfiguracionSeriesCorrelativos', () => {
  let component: ConfiguracionSeriesCorrelativos;
  let fixture: ComponentFixture<ConfiguracionSeriesCorrelativos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguracionSeriesCorrelativos],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionSeriesCorrelativos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
