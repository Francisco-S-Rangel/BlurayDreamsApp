import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCadastrarEnderecoEntregaComponent } from './modal-cadastrar-endereco-entrega.component';

describe('ModalCadastrarEnderecoEntregaComponent', () => {
  let component: ModalCadastrarEnderecoEntregaComponent;
  let fixture: ComponentFixture<ModalCadastrarEnderecoEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCadastrarEnderecoEntregaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCadastrarEnderecoEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
