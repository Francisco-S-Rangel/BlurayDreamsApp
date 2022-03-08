import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCadastrarCartaoCreditoComponent } from './modal-cadastrar-cartao-credito.component';

describe('ModalCadastrarCartaoCreditoComponent', () => {
  let component: ModalCadastrarCartaoCreditoComponent;
  let fixture: ComponentFixture<ModalCadastrarCartaoCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCadastrarCartaoCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCadastrarCartaoCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
