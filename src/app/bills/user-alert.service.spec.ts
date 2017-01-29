/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserAlertService } from './user-alert.service';

describe('UserAlertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAlertService]
    });
  });

  it('should ...', inject([UserAlertService], (service: UserAlertService) => {
    expect(service).toBeTruthy();
  }));
});
