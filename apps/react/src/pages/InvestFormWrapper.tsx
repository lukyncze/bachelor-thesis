import {useState} from 'react';
import InvestForm from '../components/InvestForm/InvestForm';
import FutureValuesInfo from '../components/InvestForm/FutureValuesInfo';
import {FutureValues, InvestFormData} from '../components/InvestForm/types';
import futureValuesCalculator from '../components/InvestForm/futureValuesCalculator';

const defaultValues: InvestFormData = {
  oneOffInvestment: 10_000,
  investmentLength: 10,
  averageSavingsInterest: 2,
  averageSP500Interest: 9.8,
};

function InvestFormWrapper() {
  const [futureValues, setFutureValues] = useState<FutureValues>();

  const handleFormSubmit = (formData: InvestFormData) => {
    const futureValues = futureValuesCalculator(formData);
    setFutureValues(futureValues);
  };

  return (
    <div className="container mx-auto">
      <InvestForm handleFormSubmit={handleFormSubmit} defaultValues={defaultValues} />

      {futureValues ? <FutureValuesInfo {...futureValues} /> : null}
    </div>
  );
}

export default InvestFormWrapper;
