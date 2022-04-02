import { TestBed } from '@angular/core/testing';

import { DesativacaoClienteService } from './desativacao-cliente.service';

describe('DesativacaoClienteService', () => {
  let service: DesativacaoClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesativacaoClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
