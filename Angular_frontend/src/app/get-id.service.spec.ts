import { TestBed, inject } from '@angular/core/testing';

import { GetIdService } from './get-id.service';

describe('GetIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetIdService]
    });
  });

  it('should ...', inject([GetIdService], (service: GetIdService) => {
    expect(service).toBeTruthy();
  }));
});
