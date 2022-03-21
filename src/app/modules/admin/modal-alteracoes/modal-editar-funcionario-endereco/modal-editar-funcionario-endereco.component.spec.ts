/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModalEditarFuncionarioEnderecoComponent } from './modal-editar-funcionario-endereco.component';

describe('ModalEditarFuncionarioEnderecoComponent', () => {
  let component: ModalEditarFuncionarioEnderecoComponent;
  let fixture: ComponentFixture<ModalEditarFuncionarioEnderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarFuncionarioEnderecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarFuncionarioEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
