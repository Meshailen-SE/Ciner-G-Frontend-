import { TestBed } from '@angular/core/testing';

import { ReportsUploadService } from './reports-upload.service';

describe('ReportsUploadService', () => {
  let service: ReportsUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportsUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
