import { TestBed } from '@angular/core/testing';

import { IssuesUploadService } from './issues-upload.service';

describe('IssuesUploadService', () => {
  let service: IssuesUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssuesUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
