/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerfilUsuarioCadastrarCartaoComponent } from './perfil-usuario-cadastrar-cartao.component';

describe('PerfilUsuarioCadastrarCartaoComponent', () => {
  let component: PerfilUsuarioCadastrarCartaoComponent;
  let fixture: ComponentFixture<PerfilUsuarioCadastrarCartaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioCadastrarCartaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilUsuarioCadastrarCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
