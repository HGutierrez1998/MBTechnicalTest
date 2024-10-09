import { TestBed } from '@angular/core/testing';

import { SandboxmbService } from './sandboxmb.service';

describe('SandboxmbService', () => {
  let service: SandboxmbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SandboxmbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
