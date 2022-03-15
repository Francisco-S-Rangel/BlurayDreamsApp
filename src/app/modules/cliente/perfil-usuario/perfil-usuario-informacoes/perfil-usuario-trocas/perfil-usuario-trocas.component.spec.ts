/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerfilUsuarioTrocasComponent } from './perfil-usuario-trocas.component';

describe('PerfilUsuarioTrocasComponent', () => {
  let component: PerfilUsuarioTrocasComponent;
  let fixture: ComponentFixture<PerfilUsuarioTrocasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioTrocasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilUsuarioTrocasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
