/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerfilUsuarioAlteraCartaoComponent } from './perfil-usuario-altera-cartao.component';

describe('PerfilUsuarioAlteraCartaoComponent', () => {
  let component: PerfilUsuarioAlteraCartaoComponent;
  let fixture: ComponentFixture<PerfilUsuarioAlteraCartaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioAlteraCartaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilUsuarioAlteraCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
