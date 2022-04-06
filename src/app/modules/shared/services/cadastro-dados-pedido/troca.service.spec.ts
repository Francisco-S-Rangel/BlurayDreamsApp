import { TestBed } from '@angular/core/testing';

import { TrocaService } from './troca.service';

describe('TrocaService', () => {
  let service: TrocaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrocaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
