import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReporteAuditoria } from './reporte-auditoria';

describe('ReporteAuditoria', () => {
  let component: ReporteAuditoria;
  let fixture: ComponentFixture<ReporteAuditoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteAuditoria],
    }).compileComponents();

    fixture = TestBed.createComponent(ReporteAuditoria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
