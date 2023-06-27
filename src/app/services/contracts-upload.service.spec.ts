import { TestBed } from '@angular/core/testing';

import { ContractsUploadService } from './contracts-upload.service';

describe('ContractsUploadService', () => {
  let service: ContractsUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractsUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
