import {ChangeEvent, useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import InputLabel from './InputLabel';
import {FormFieldValues} from './formValues';

interface FormProps {
  onFormSubmit: (values: FormFieldValues) => void;
  defaultValues?: FormFieldValues;
}

function Form({
  onFormSubmit,
  defaultValues = {
    oneOffInvestment: 500,
    investmentLength: 10,
    averageSavingsInterest: 5,
    averageSP500Interest: 10,
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

  const onSubmit: SubmitHandler<FormFieldValues> = data => onFormSubmit(data);

  // useEffect(() => {
  //   const subscription = watch(() => handleSubmit(onSubmit)());
  //   return () => subscription.unsubscribe();
  // }, [handleSubmit, watch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex md:gap-4">
        <div className="mb-4 md:w-1/2">
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
            className="mt-1 block w-full rounded-md p-2 shadow-sm bg-slate-100 border border-gray-300"
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

        <div className="mb-4 md:w-1/2">
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
              className="mt-1 block w-full rounded-md p-2 shadow-sm bg-slate-100 border border-gray-300"
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
      </div>

      <div className="md:flex md:gap-4">
        <div className="mb-4 md:w-1/2">
          <InputLabel id="averageSavingsInterest">
            Average interest on a savings account (0-10 %)
          </InputLabel>

          <input
            id="averageSavingsInterest"
            type="number"
            step={0.1}
            {...register('averageSavingsInterest', {
              required: true,
              valueAsNumber: true,
              min: 0,
              max: 10,
            })}
            className="mt-1 block w-full rounded-md p-2 shadow-sm bg-slate-100 border border-gray-300"
          />
          {errors.averageSavingsInterest?.type === 'required' && (
            <p className="text-red-500 text-xs italic mt-1">
              Please enter a valid average amount of interest on savings account (non-negative
              number).
            </p>
          )}
          {errors.averageSavingsInterest?.type === 'min' && (
            <p className="text-red-500 text-xs italic mt-1">
              Please enter a valid average amount of interest on savings account (minimum 0 %).
            </p>
          )}
          {errors.averageSavingsInterest?.type === 'max' && (
            <p className="text-red-500 text-xs italic mt-1">
              Please enter a valid average amount of interest on savings account (maximum 10 %).
            </p>
          )}
        </div>

        <div className="mb-4 md:w-1/2">
          <InputLabel id="averageSP500Interest">
            Average S&P 500 yield (approximate value in %)
          </InputLabel>

          <input
            id="averageSP500Interest"
            type="number"
            {...register('averageSP500Interest', {
              required: true,
              valueAsNumber: true,
            })}
            className="mt-1 block w-full rounded-md p-2 shadow-sm bg-slate-100 border border-gray-300 cursor-not-allowed opacity-70"
            disabled
            readOnly
          />
          {errors.averageSP500Interest?.type === 'required' && (
            <p className="text-red-500 text-xs italic mt-1">
              Please enter a valid average amount of S&P 500 yield (non-negative number).
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 mr-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-700"
      >
        Calculate
      </button>
    </form>
  );
}

export default Form;

// https://codesandbox.io/p/sandbox/react-hook-form-useformmethods-e3411?file=%2Fsrc%2FApp.tsx
// https://react-hook-form.com/docs/useformstate/errormessage
