import { TestBed } from '@angular/core/testing';

import { ModuleFederationConfigLibService } from './module-federation-config-lib.service';

describe('ModuleFederationConfigLibService', () => {
  let service: ModuleFederationConfigLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleFederationConfigLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
