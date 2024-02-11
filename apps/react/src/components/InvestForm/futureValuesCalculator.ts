import {FutureValues, InvestFormData} from './types';

const calculateFutureValueOfSavings = (data: InvestFormData): number => {
  const compoundingFactor = Math.pow(1 + data.averageSavingsInterest / 100, data.investmentLength);
  const futureValue = data.oneOffInvestment * compoundingFactor;

  return getRoundedNumber(futureValue);
};

const calculateFutureValueOfSP500 = (data: InvestFormData): number => {
  const compoundingFactor = Math.pow(1 + data.averageSP500Interest / 100, data.investmentLength);
  const futureValue = data.oneOffInvestment * compoundingFactor;

  return getRoundedNumber(futureValue);
};

const getRoundedNumber = (value: number): number => {
  return parseFloat(Math.round(value).toFixed(2));
};

function futureValuesCalculator(formData: InvestFormData | undefined): FutureValues | undefined {
  if (!formData) return;

  const futureValueOfSavings = calculateFutureValueOfSavings(formData);
  const futureValueOfSP500 = calculateFutureValueOfSP500(formData);

  return {futureValueOfSavings, futureValueOfSP500};
}

export default futureValuesCalculator;
