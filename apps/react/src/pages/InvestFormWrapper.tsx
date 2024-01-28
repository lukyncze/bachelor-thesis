import InvestForm from '../components/InvestForm/InvestForm';
import FutureValuesInfo from '../components/InvestForm/FutureValuesInfo';
import {InvestFormData} from '../components/InvestForm/types';
import useFutureValuesCalculator from '../components/InvestForm/useFutureValuesCalculator';

const defaultValues: InvestFormData = {
  oneOffInvestment: 10_000,
  investmentLength: 10,
  averageSavingsInterest: 2,
  averageSP500Interest: 9.8,
};

function InvestFormWrapper() {
  const [result, setInputData] = useFutureValuesCalculator();

  return (
    <div className="container mx-auto">
      <InvestForm onFormSubmit={data => setInputData(data)} defaultValues={defaultValues} />

      {result ? <FutureValuesInfo {...result} /> : null}
    </div>
  );
}

export default InvestFormWrapper;
