import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarLote } from './editar-lote';

describe('EditarLote', () => {
  let component: EditarLote;
  let fixture: ComponentFixture<EditarLote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarLote],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarLote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
