import { TestBed } from '@angular/core/testing';

import { ShareableService } from './shareable.service';

describe('ShareableService', () => {
  let service: ShareableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
