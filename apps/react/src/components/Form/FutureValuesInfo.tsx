import FutureValueInfo from './FutureValueInfo';
import {FutureValues} from './formValues';

type PresentFutureValuesProps = FutureValues;

function FutureValuesInfo({futureValueOfSavings, futureValueOfSP500}: PresentFutureValuesProps) {
  return (
    <div className="flex mt-4 bg-blue-300 p-6 rounded-lg shadow-md">
      <FutureValueInfo futureValue={futureValueOfSavings}>
        Future value on savings account
      </FutureValueInfo>

      <FutureValueInfo futureValue={futureValueOfSP500}>
        Future value while invested in S&P 500
      </FutureValueInfo>
    </div>
  );
}

export default FutureValuesInfo;
