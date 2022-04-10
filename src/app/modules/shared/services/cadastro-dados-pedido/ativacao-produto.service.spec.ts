import { TestBed } from '@angular/core/testing';

import { AtivacaoProdutoService } from './ativacao-produto.service';

describe('AtivacaoProdutoService', () => {
  let service: AtivacaoProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtivacaoProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
