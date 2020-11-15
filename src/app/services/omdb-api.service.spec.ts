import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { OmdbApiService } from './omdb-api.service';

describe('OmdbApiService', () => {
  let service: OmdbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(OmdbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
