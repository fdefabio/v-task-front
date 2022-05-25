import { TestBed } from '@angular/core/testing';

import { CargarExamenesService } from './cargar-examenes.service';

describe('CargarExamenesService', () => {
  let service: CargarExamenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarExamenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
