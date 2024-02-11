import {PropsWithChildren} from 'react';
import useCountries from '../components/CountryGuesser/hooks/useCountries';
import CountryGuesser from '../components/CountryGuesser/CountryGuesser';
import LoadingSkeleton from '../components/CountryGuesser/LoadingSkeleton';
import ErrorAlert from '../components/CountryGuesser/ErrorAlert';

const WrapperDiv = ({children}: PropsWithChildren) => {
  return (
    <div className="container flex flex-col justify-center justify-items-center mx-auto">
      {children}
    </div>
  );
};

function CountryGuesserWrapper() {
  const [countries, error] = useCountries();

  if (error) {
    return (
      <WrapperDiv>
        <ErrorAlert message={error.message} />
      </WrapperDiv>
    );
  }

  if (countries.length > 0) {
    return <CountryGuesser countries={countries} />;
  }

  return (
    <WrapperDiv>
      <LoadingSkeleton />
    </WrapperDiv>
  );
}

export default CountryGuesserWrapper;
