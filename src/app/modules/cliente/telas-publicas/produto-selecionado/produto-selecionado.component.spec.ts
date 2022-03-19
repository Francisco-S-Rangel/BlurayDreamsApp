import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoSelecionadoComponent } from './produto-selecionado.component';

describe('ProdutoSelecionadoComponent', () => {
  let component: ProdutoSelecionadoComponent;
  let fixture: ComponentFixture<ProdutoSelecionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoSelecionadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoSelecionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
