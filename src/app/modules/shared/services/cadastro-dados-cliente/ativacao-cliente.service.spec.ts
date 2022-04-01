import { TestBed } from '@angular/core/testing';

import { AtivacaoClienteService } from './ativacao-cliente.service';

describe('AtivacaoClienteService', () => {
  let service: AtivacaoClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtivacaoClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
