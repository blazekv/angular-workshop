import { TestBed } from '@angular/core/testing';

import { NullLoggingService } from './null-logging.service';

describe('NullLoggingService', () => {
  let service: NullLoggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NullLoggingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
