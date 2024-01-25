import Form from '../components/Form/Form';
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
    <>
      <Form onFormSubmit={data => setInputData(data)} defaultValues={defaultValues} />

      {result ? (
        <div className="mt-4">
          <p className="text-xl">
            Future value of savings: {result.futureValueOfSavings.toLocaleString('de-DE')}€
          </p>
          <p className="text-xl">
            Future value of S&P 500: {result.futureValueOfSP500.toLocaleString('de-DE')}€
          </p>
        </div>
      ) : null}
    </>
  );
}

export default FormWrapper;
