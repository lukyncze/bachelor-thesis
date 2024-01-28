import {TestBed} from '@angular/core/testing';
import {FutureValuesCalculatorService} from './future-values-calculator.service';

describe('FutureValuesCalculatorService', () => {
  let service: FutureValuesCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FutureValuesCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
