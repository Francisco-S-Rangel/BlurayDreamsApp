/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FinalizarEnderecoCobrancaComponent } from './finalizar-endereco-cobranca.component';

describe('FinalizarEnderecoCobrancaComponent', () => {
  let component: FinalizarEnderecoCobrancaComponent;
  let fixture: ComponentFixture<FinalizarEnderecoCobrancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizarEnderecoCobrancaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizarEnderecoCobrancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
