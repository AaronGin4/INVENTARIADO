import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoLote } from './nuevo-lote';

describe('NuevoLote', () => {
  let component: NuevoLote;
  let fixture: ComponentFixture<NuevoLote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoLote],
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoLote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
