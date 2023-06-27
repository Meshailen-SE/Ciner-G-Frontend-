import { TestBed } from '@angular/core/testing';

import { AccountsUploadService } from './accounts-upload.service';

describe('AccountsUploadService', () => {
  let service: AccountsUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountsUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
