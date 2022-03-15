/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerfilUsuarioAlteraCobrancaComponent } from './perfil-usuario-altera-cobranca.component';

describe('PerfilUsuarioAlteraCobrancaComponent', () => {
  let component: PerfilUsuarioAlteraCobrancaComponent;
  let fixture: ComponentFixture<PerfilUsuarioAlteraCobrancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioAlteraCobrancaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilUsuarioAlteraCobrancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
