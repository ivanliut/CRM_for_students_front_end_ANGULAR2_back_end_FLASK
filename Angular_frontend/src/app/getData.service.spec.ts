import { TestBed, inject } from '@angular/core/testing';

import { GetDataService } from './getData.service';

describe('GetDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDataService]
    });
  });

  it('should ...', inject([GetDataService], (service: GetDataService) => {
    expect(service).toBeTruthy();
  }));
});
