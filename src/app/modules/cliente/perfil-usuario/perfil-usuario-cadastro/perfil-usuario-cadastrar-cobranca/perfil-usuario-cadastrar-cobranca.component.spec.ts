/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerfilUsuarioCadastrarCobrancaComponent } from './perfil-usuario-cadastrar-cobranca.component';

describe('PerfilUsuarioCadastrarCobrancaComponent', () => {
  let component: PerfilUsuarioCadastrarCobrancaComponent;
  let fixture: ComponentFixture<PerfilUsuarioCadastrarCobrancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioCadastrarCobrancaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilUsuarioCadastrarCobrancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
