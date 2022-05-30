import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaFuncionarioComponent } from './pesquisa-funcionario.component';

describe('PesquisaFuncionarioComponent', () => {
  let component: PesquisaFuncionarioComponent;
  let fixture: ComponentFixture<PesquisaFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisaFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
