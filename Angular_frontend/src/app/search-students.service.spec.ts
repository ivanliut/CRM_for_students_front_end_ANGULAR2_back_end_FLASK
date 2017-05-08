import { TestBed, inject } from '@angular/core/testing';

import { SearchStudentsService } from './search-students.service';

describe('SearchStudentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchStudentsService]
    });
  });

  it('should ...', inject([SearchStudentsService], (service: SearchStudentsService) => {
    expect(service).toBeTruthy();
  }));
});
