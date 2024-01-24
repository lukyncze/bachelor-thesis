import Form from '../components/Form/Form';

function FormWrapper() {
  return (
    <Form
      defaultValues={{
        oneOffInvestment: 1000,
        regularInvestment: 200,
        investmentLength: 5,
      }}
    />
  );
}

export default FormWrapper;
