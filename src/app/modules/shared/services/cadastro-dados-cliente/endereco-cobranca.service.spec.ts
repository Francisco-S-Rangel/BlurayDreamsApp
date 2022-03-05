import { TestBed } from '@angular/core/testing';

import { EnderecoCobrancaService } from './endereco-cobranca.service';

describe('EnderecoCobrancaService', () => {
  let service: EnderecoCobrancaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnderecoCobrancaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
