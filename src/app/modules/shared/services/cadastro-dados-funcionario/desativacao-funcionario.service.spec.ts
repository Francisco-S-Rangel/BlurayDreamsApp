import { TestBed } from '@angular/core/testing';

import { DesativacaoFuncionarioService } from './desativacao-funcionario.service';

describe('DesativacaoFuncionarioService', () => {
  let service: DesativacaoFuncionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesativacaoFuncionarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
