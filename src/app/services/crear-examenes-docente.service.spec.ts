import { TestBed } from '@angular/core/testing';

import { CrearExamenesDocenteService } from './crear-examenes-docente.service';

describe('CrearExamenesDocenteService', () => {
  let service: CrearExamenesDocenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearExamenesDocenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
