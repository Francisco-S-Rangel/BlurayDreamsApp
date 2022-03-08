import { TestBed } from '@angular/core/testing';

import { BandeiraCartaoService } from './bandeira-cartao.service';

describe('BandeiraCartaoService', () => {
  let service: BandeiraCartaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BandeiraCartaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
