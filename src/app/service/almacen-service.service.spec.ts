import { TestBed } from '@angular/core/testing';

import { AlmacenServiceService } from './almacen-service.service';

describe('AlmacenServiceService', () => {
  let service: AlmacenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlmacenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
