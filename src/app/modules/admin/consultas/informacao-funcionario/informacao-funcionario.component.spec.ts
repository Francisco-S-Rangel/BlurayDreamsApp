import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacaoFuncionarioComponent } from './informacao-funcionario.component';

describe('InformacaoFuncionarioComponent', () => {
  let component: InformacaoFuncionarioComponent;
  let fixture: ComponentFixture<InformacaoFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacaoFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacaoFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
