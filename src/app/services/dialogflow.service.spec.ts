import { TestBed, inject } from '@angular/core/testing';

import { DialogflowService } from './dialogflow.service';

describe('DialogflowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogflowService]
    });
  });

  it('should be created', inject([DialogflowService], (service: DialogflowService) => {
    expect(service).toBeTruthy();
  }));
});
