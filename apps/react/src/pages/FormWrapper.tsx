import Form from '../components/Form/Form';
import FutureValuesInfo from '../components/Form/FutureValuesInfo';
import {FormFieldValues} from '../components/Form/formValues';
import useFutureValueCalculator from '../components/Form/useFutureValuesCalculator';

const defaultValues: FormFieldValues = {
  oneOffInvestment: 10_000,
  investmentLength: 10,
  averageSavingsInterest: 2,
  averageSP500Interest: 9.8,
};

function FormWrapper() {
  const [result, setInputData] = useFutureValueCalculator();

  return (
    <div className="container mx-auto">
      <Form onFormSubmit={data => setInputData(data)} defaultValues={defaultValues} />

      {result ? <FutureValuesInfo {...result} /> : null}
    </div>
  );
}

export default FormWrapper;
