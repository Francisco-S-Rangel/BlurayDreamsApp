/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MotivoInativacaoFuncionarioComponent } from './motivo-inativacao-funcionario.component';

describe('MotivoInativacaoFuncionarioComponent', () => {
  let component: MotivoInativacaoFuncionarioComponent;
  let fixture: ComponentFixture<MotivoInativacaoFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivoInativacaoFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivoInativacaoFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
