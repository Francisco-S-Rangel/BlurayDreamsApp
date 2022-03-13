import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacaoProdutoComponent } from './informacao-produto.component';

describe('InformacaoProdutoComponent', () => {
  let component: InformacaoProdutoComponent;
  let fixture: ComponentFixture<InformacaoProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacaoProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacaoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
