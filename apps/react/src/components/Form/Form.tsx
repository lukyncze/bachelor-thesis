import {ChangeEvent, useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import InputLabel from './InputLabel';

interface FormFieldValues {
  oneOffInvestment: number;
  regularInvestment: number;
  investmentLength: number;
}

interface FormProps {
  defaultValues?: FormFieldValues;
}

function Form({
  defaultValues = {
    oneOffInvestment: 500,
    regularInvestment: 100,
    investmentLength: 10,
  },
}: FormProps) {
  const [investmentLengthValue, setInvestmentLengthValue] = useState(
    defaultValues.investmentLength,
  );
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormFieldValues>({defaultValues, mode: 'onChange'});

  const onSubmit: SubmitHandler<FormFieldValues> = data => {
    console.log(`🚀 ~ onSubmit ~ data:`, data);
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <InputLabel id="oneOffInvestment">One-off investment (20-99.999.999€)</InputLabel>

          <input
            id="oneOffInvestment"
            type="number"
            {...register('oneOffInvestment', {
              required: true,
              valueAsNumber: true,
              min: 20,
              max: 99_999_999,
            })}
            className="mt-1 block w-full rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.oneOffInvestment?.type === 'required' && (
            <p className="text-red-500 text-xs italic mt-1">
              Please enter a valid amount of one-off investment (positive number).
            </p>
          )}
          {errors.oneOffInvestment?.type === 'min' && (
            <p className="text-red-500 text-xs italic mt-1">
              Please enter a valid amount of one-off investment (minimum 20 €).
            </p>
          )}
          {errors.oneOffInvestment?.type === 'max' && (
            <p className="text-red-500 text-xs italic mt-1">
              Please enter a valid amount of one-off investment (maximum 99.999.999 €).
            </p>
          )}
        </div>

        <div className="mb-4">
          <InputLabel id="regularInvestment">Regular investment (10-99.999.999€)</InputLabel>

          <input
            id="regularInvestment"
            type="number"
            {...register('regularInvestment', {
              required: true,
              valueAsNumber: true,
              min: 10,
              max: 99_999_999,
            })}
            className="mt-1 block w-full rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.regularInvestment?.type === 'required' && (
            <p className="text-red-500 text-xs italic mt-1">
              Please enter a valid amount of regular investment (positive number).
            </p>
          )}
          {errors.regularInvestment?.type === 'min' && (
            <p className="text-red-500 text-xs italic mt-1">
              Please enter a valid amount of regular investment (minimum 10 €).
            </p>
          )}
          {errors.regularInvestment?.type === 'max' && (
            <p className="text-red-500 text-xs italic mt-1">
              Please enter a valid amount of regular investment (maximum 99.999.999 €).
            </p>
          )}
        </div>

        <div className="mb-4">
          <InputLabel id="investmentLength">Investment length (3-60 years)</InputLabel>

          <div className="flex">
            <input
              id="investmentLength"
              type="range"
              min="3"
              max="60"
              value={investmentLengthValue}
              {...register('investmentLength', {
                required: true,
                valueAsNumber: true,
                min: 3,
                max: 60,
              })}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setInvestmentLengthValue(+event.target.value);
              }}
              className="mt-1 block w-full rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <div className="w-24 px-2 self-center text-center">
              {investmentLengthValue ? `${investmentLengthValue} years` : null}
            </div>
          </div>
          {errors.investmentLength && (
            <p className="text-red-500 text-xs italic mt-1">
              Please enter a valid length investment (positive number).
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 mr-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;

// https://codesandbox.io/p/sandbox/react-hook-form-useformmethods-e3411?file=%2Fsrc%2FApp.tsx
// https://react-hook-form.com/docs/useformstate/errormessage
