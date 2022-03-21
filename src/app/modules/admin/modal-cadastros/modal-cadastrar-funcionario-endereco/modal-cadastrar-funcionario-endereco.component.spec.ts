/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModalCadastrarFuncionarioEnderecoComponent } from './modal-cadastrar-funcionario-endereco.component';

describe('ModalCadastrarFuncionarioEnderecoComponent', () => {
  let component: ModalCadastrarFuncionarioEnderecoComponent;
  let fixture: ComponentFixture<ModalCadastrarFuncionarioEnderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCadastrarFuncionarioEnderecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCadastrarFuncionarioEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
