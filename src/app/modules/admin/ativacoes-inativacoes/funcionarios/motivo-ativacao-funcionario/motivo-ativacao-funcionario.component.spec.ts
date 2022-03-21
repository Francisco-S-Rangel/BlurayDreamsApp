/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MotivoAtivacaoFuncionarioComponent } from './motivo-ativacao-funcionario.component';

describe('MotivoAtivacaoFuncionarioComponent', () => {
  let component: MotivoAtivacaoFuncionarioComponent;
  let fixture: ComponentFixture<MotivoAtivacaoFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivoAtivacaoFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivoAtivacaoFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
