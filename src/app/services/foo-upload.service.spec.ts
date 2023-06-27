import { TestBed } from '@angular/core/testing';

import { FooUploadService } from './foo-upload.service';

describe('FooUploadService', () => {
  let service: FooUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
