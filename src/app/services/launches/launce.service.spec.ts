import { TestBed } from '@angular/core/testing';

import { LaunceService } from './launce.service';

describe('LaunceService', () => {
  let service: LaunceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
