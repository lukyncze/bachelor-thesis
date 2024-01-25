import {useEffect, useState} from 'react';
import {FormFieldValues} from './formValues';

interface FutureValues {
  futureValueOfSavings: number;
  futureValueOfSP500: number;
}

const calculateFutureValueOfSavings = (data: FormFieldValues): number => {
  const compoundingFactor = Math.pow(1 + data.averageSavingsInterest / 100, data.investmentLength);
  const futureValue = data.oneOffInvestment * compoundingFactor;

  return getRoundedNumber(futureValue);
};

const calculateFutureValueOfSP500 = (data: FormFieldValues): number => {
  const compoundingFactor = Math.pow(1 + data.averageSP500Interest / 100, data.investmentLength);
  const futureValue = data.oneOffInvestment * compoundingFactor;

  return getRoundedNumber(futureValue);
};

const getRoundedNumber = (value: number): number => {
  return parseFloat(Math.round(value).toFixed(2));
};

const useFutureValueCalculator = () => {
  const [inputData, setInputData] = useState<FormFieldValues>();
  const [futureValues, setFutureValues] = useState<FutureValues>();

  useEffect(() => {
    if (!inputData) return;

    const futureValueOfSavings = calculateFutureValueOfSavings(inputData);
    const futureValueOfSP500 = calculateFutureValueOfSP500(inputData);

    setFutureValues({futureValueOfSavings, futureValueOfSP500});
  }, [inputData]);

  return [futureValues, setInputData] as const;
};

export default useFutureValueCalculator;
