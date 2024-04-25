import { TestBed } from '@angular/core/testing';

import { DatoConnectService } from './dato-connect.service';

describe('DatoConnectService', () => {
  let service: DatoConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatoConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
