/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerfilUsuarioTrocasDetalhesComponent } from './perfil-usuario-trocas-detalhes.component';

describe('PerfilUsuarioTrocasDetalhesComponent', () => {
  let component: PerfilUsuarioTrocasDetalhesComponent;
  let fixture: ComponentFixture<PerfilUsuarioTrocasDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioTrocasDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilUsuarioTrocasDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
