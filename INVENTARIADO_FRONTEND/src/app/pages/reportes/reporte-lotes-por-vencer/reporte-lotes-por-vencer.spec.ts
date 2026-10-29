import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReporteLotesPorVencer } from './reporte-lotes-por-vencer';

describe('ReporteLotesPorVencer', () => {
  let component: ReporteLotesPorVencer;
  let fixture: ComponentFixture<ReporteLotesPorVencer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteLotesPorVencer],
    }).compileComponents();

    fixture = TestBed.createComponent(ReporteLotesPorVencer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
