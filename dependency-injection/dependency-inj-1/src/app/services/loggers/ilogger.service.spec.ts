import { TestBed } from '@angular/core/testing';

import { IloggerService } from './ilogger.service';

describe('IloggerService', () => {
  let service: IloggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IloggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
