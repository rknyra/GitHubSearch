import { TestBed } from '@angular/core/testing';

import { GhSearchService } from './gh-search-service';

describe('GhSearchServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GhSearchService = TestBed.get(GhSearchService);
    expect(service).toBeTruthy();
  });
});
