import { TestBed } from '@angular/core/testing';

import { UserlabService } from './userlab.service';

describe('UserlabService', () => {
  let service: UserlabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserlabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
