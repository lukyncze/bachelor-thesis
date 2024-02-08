import {getGuessedCountriesWithFlags} from './helpers';
import {Country} from './useCountries';

interface GuessedCountriesListProps {
  countries: ReadonlyArray<Country>;
  guessedCountries: ReadonlyArray<string>;
}

function GuessedCountriesList({countries, guessedCountries}: GuessedCountriesListProps) {
  const guessedCountriesWithFlag = getGuessedCountriesWithFlags(countries, guessedCountries);

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Guessed countries</h2>

      <div className="flex flex-col w-96">
        <ul className="space-y-2">
          {guessedCountriesWithFlag.map((country, index) => (
            <li key={index} className="rounded-md bg-gray-100 p-1">
              {index + 1}. {country.name} {country.flag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GuessedCountriesList;
