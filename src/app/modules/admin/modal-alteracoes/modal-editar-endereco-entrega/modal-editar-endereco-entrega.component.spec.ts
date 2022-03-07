import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarEnderecoEntregaComponent } from './modal-editar-endereco-entrega.component';

describe('ModalEditarEnderecoEntregaComponent', () => {
  let component: ModalEditarEnderecoEntregaComponent;
  let fixture: ComponentFixture<ModalEditarEnderecoEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarEnderecoEntregaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarEnderecoEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
