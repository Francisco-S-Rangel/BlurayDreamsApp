import { TestBed } from '@angular/core/testing';

import { DesativacaoProdutoService } from './desativacao-produto.service';

describe('DesativacaoProdutoService', () => {
  let service: DesativacaoProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesativacaoProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
