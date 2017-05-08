import { TestBed, inject } from '@angular/core/testing';

import { PostDataService } from './post-data.service';

describe('PostDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostDataService]
    });
  });

  it('should ...', inject([PostDataService], (service: PostDataService) => {
    expect(service).toBeTruthy();
  }));
});
