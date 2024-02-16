import { TestBed } from '@angular/core/testing';

import { ReagentService } from './reagent.service';

describe('ReagentService', () => {
  let service: ReagentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReagentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
