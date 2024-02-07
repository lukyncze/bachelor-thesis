import useCountries from '../components/CountryGuesser/useCountries';
import CountryGuesser from '../components/CountryGuesser/CountryGuesser';

function CountryGuesserWrapper() {
  const [countries, isLoading, error] = useCountries();

  if (error) {
    return <p>There was an error with getting the countries data. Please try again later.</p>;
  }

  if (isLoading) {
    return <p>Loading the Country guesser. Please wait.</p>;
  }

  if (countries.length > 0) {
    return <CountryGuesser countries={countries} />;
  }

  return <p>There are no countries to guess. Please try again later.</p>;
}

export default CountryGuesserWrapper;
