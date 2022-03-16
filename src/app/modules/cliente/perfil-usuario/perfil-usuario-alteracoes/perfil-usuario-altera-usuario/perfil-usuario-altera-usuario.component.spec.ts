/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerfilUsuarioAlteraUsuarioComponent } from './perfil-usuario-altera-usuario.component';

describe('PerfilUsuarioAlteraUsuarioComponent', () => {
  let component: PerfilUsuarioAlteraUsuarioComponent;
  let fixture: ComponentFixture<PerfilUsuarioAlteraUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioAlteraUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilUsuarioAlteraUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
