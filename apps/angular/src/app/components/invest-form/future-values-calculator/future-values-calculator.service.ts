import {Injectable} from '@angular/core';
import {FutureValues, InvestFormData} from '../types';

@Injectable({
  providedIn: 'root',
})
export class FutureValuesCalculatorService {
  public calculate(inputData: InvestFormData): FutureValues {
    const futureValueOfSavings = this.calculateFutureValueOfSavings(inputData);
    const futureValueOfSP500 = this.calculateFutureValueOfSP500(inputData);

    return {futureValueOfSavings, futureValueOfSP500};
  }

  private calculateFutureValueOfSavings(data: InvestFormData): number {
    const compoundingFactor = Math.pow(
      1 + data.averageSavingsInterest / 100,
      data.investmentLength,
    );
    const futureValue = data.oneOffInvestment * compoundingFactor;

    return this.getRoundedNumber(futureValue);
  }

  private calculateFutureValueOfSP500(data: InvestFormData): number {
    const compoundingFactor = Math.pow(1 + data.averageSP500Interest / 100, data.investmentLength);
    const futureValue = data.oneOffInvestment * compoundingFactor;

    return this.getRoundedNumber(futureValue);
  }

  private getRoundedNumber(value: number): number {
    return parseFloat(Math.round(value).toFixed(2));
  }
}
