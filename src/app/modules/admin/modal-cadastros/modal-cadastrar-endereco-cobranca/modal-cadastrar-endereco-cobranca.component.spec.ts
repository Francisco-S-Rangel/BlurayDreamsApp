import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCadastrarEnderecoCobrancaComponent } from './modal-cadastrar-endereco-cobranca.component';

describe('ModalCadastrarEnderecoCobrancaComponent', () => {
  let component: ModalCadastrarEnderecoCobrancaComponent;
  let fixture: ComponentFixture<ModalCadastrarEnderecoCobrancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCadastrarEnderecoCobrancaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCadastrarEnderecoCobrancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
