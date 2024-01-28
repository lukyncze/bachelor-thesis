import {useEffect, useState} from 'react';
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

function useFutureValuesCalculator() {
  const [inputData, setInputData] = useState<InvestFormData>();
  const [futureValues, setFutureValues] = useState<FutureValues>();

  useEffect(() => {
    if (!inputData) return;

    const futureValueOfSavings = calculateFutureValueOfSavings(inputData);
    const futureValueOfSP500 = calculateFutureValueOfSP500(inputData);

    setFutureValues({futureValueOfSavings, futureValueOfSP500});
  }, [inputData]);

  return [futureValues, setInputData] as const;
}

export default useFutureValuesCalculator;
