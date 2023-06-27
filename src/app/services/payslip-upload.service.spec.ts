import { TestBed } from '@angular/core/testing';

import { PayslipUploadService } from './payslip-upload.service';

describe('PayslipUploadService', () => {
  let service: PayslipUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayslipUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
