import FutureValueInfo from './FutureValueInfo';
import {FutureValues} from './types';

type PresentFutureValuesProps = FutureValues;

function FutureValuesInfo({futureValueOfSavings, futureValueOfSP500}: PresentFutureValuesProps) {
  return (
    <div className="space-y-6 mt-4 bg-blue-300 p-6 rounded-lg shadow-md sm:flex sm:space-y-0">
      <FutureValueInfo futureValue={futureValueOfSavings}>
        Future value on savings account
      </FutureValueInfo>

      <FutureValueInfo futureValue={futureValueOfSP500}>
        Future value after investing in S&P 500
      </FutureValueInfo>
    </div>
  );
}

export default FutureValuesInfo;
