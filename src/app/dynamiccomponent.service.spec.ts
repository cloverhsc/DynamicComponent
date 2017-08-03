import { TestBed, inject } from '@angular/core/testing';

import { DynamiccomponentService } from './dynamiccomponent.service';

describe('DynamiccomponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamiccomponentService]
    });
  });

  it('should be created', inject([DynamiccomponentService], (service: DynamiccomponentService) => {
    expect(service).toBeTruthy();
  }));
});
