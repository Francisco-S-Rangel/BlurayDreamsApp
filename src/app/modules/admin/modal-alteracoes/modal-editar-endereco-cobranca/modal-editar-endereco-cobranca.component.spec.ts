import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarEnderecoCobrancaComponent } from './modal-editar-endereco-cobranca.component';

describe('ModalEditarEnderecoCobrancaComponent', () => {
  let component: ModalEditarEnderecoCobrancaComponent;
  let fixture: ComponentFixture<ModalEditarEnderecoCobrancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarEnderecoCobrancaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarEnderecoCobrancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
