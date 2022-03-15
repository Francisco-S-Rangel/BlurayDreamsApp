/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerfilUsuarioCadastrarEntregaComponent } from './perfil-usuario-cadastrar-entrega.component';

describe('PerfilUsuarioCadastrarEntregaComponent', () => {
  let component: PerfilUsuarioCadastrarEntregaComponent;
  let fixture: ComponentFixture<PerfilUsuarioCadastrarEntregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioCadastrarEntregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilUsuarioCadastrarEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
