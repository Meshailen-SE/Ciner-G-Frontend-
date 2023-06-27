import { TestBed } from '@angular/core/testing';

import { PoUploadService } from './po-upload.service';

describe('PoUploadService', () => {
  let service: PoUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
