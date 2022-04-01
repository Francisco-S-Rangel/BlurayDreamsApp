import { TestBed } from '@angular/core/testing';

import { AtivacaoFuncionarioService } from './ativacao-funcionario.service';

describe('AtivacaoFuncionarioService', () => {
  let service: AtivacaoFuncionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtivacaoFuncionarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
