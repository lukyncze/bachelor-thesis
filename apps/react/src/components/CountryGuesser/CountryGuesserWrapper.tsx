import {useState} from 'react';
import HintBox from './HintBox';
import useCountries from './useCountries';
import CountryGuess from './CountryGuess';

function CountryGuesserWrapper() {
  const [countries, randomCountry, isLoading, error] = useCountries();
  const [guess, setGuess] = useState('');

  if (error) {
    return <p>There was an with getting the countries data. Please try again later.</p>;
  }

  if (isLoading) {
    return <p>Loading the Country guesser. Please wait.</p>;
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4">
        <HintBox
          title="Size"
          abbrTitle="The size of the country in km²"
          hint={randomCountry?.area.toLocaleString() + ' km²'}
        />
        <HintBox
          title="Population"
          abbrTitle=""
          hint={randomCountry?.population.toLocaleString() + ' people'}
        />
        <HintBox title="Landlocked" abbrTitle="" hint={randomCountry?.landlocked ? 'Yes' : 'No'} />
        <HintBox title="Region" abbrTitle="" hint={randomCountry?.region} />
        <HintBox
          title="Languages"
          abbrTitle=""
          hint={randomCountry?.languages && Object.values(randomCountry?.languages).join(', ')}
        />
        <HintBox
          title="Capital"
          abbrTitle=""
          hint={randomCountry?.capital && Object.values(randomCountry?.languages).join(', ')}
        />
        <HintBox
          title="Borders"
          abbrTitle=""
          hint={
            randomCountry?.borders.length
              ? Object.values(randomCountry?.borders).join(', ')
              : 'None'
          }
        />
        <HintBox title="Country flag" abbrTitle="" hint="">
          <img src={randomCountry?.flags.png} alt="Country flag" width={240} height={160} />
        </HintBox>
      </div>

      <CountryGuess countries={countries} guess={guess} setGuess={setGuess} />
    </div>
  );
}

export default CountryGuesserWrapper;
