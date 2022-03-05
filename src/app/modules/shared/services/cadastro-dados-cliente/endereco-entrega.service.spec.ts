import { TestBed } from '@angular/core/testing';

import { EnderecoEntregaService } from './endereco-entrega.service';

describe('EnderecoEntregaService', () => {
  let service: EnderecoEntregaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnderecoEntregaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
