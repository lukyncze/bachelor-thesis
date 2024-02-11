import useCountries from '../components/CountryGuesser/useCountries';
import CountryGuesser from '../components/CountryGuesser/CountryGuesser';

function CountryGuesserWrapper() {
  const [countries, error] = useCountries();

  if (error) {
    return <p>{error.message}</p>;
  }

  if (countries.length > 0) {
    return <CountryGuesser countries={countries} />;
  }

  return <p>Loading the Country guesser. Please wait.</p>;
}

export default CountryGuesserWrapper;
