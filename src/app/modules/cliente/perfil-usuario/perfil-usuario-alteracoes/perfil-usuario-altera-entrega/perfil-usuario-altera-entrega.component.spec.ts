/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerfilUsuarioAlteraEntregaComponent } from './perfil-usuario-altera-entrega.component';

describe('PerfilUsuarioAlteraEntregaComponent', () => {
  let component: PerfilUsuarioAlteraEntregaComponent;
  let fixture: ComponentFixture<PerfilUsuarioAlteraEntregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioAlteraEntregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilUsuarioAlteraEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
