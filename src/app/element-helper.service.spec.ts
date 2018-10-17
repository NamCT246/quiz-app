/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ElementHelperService } from './element-helper.service';

describe('ElementHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElementHelperService]
    });
  });

  it('should ...', inject([ElementHelperService], (service: ElementHelperService) => {
    expect(service).toBeTruthy();
  }));
});
