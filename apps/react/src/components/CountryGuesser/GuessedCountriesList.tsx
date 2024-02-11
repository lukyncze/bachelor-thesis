import {getGuessedCountriesWithAdditionalProps} from './helpers';
import {Country} from './country';

interface GuessedCountriesListProps {
  countries: ReadonlyArray<Country>;
  guessedCountries: ReadonlyArray<string>;
  randomCountry: Country;
}

function GuessedCountriesList({
  countries,
  guessedCountries,
  randomCountry,
}: GuessedCountriesListProps) {
  const guessedCountriesWithAdditionalProps = getGuessedCountriesWithAdditionalProps(
    countries,
    guessedCountries,
    randomCountry,
  );

  return (
    <div className="border-t border-gray-300 pt-4 lg:border-t-0 lg:pt-0">
      <h2 className="text-xl font-bold mb-3">Guessed countries</h2>

      <div className="flex flex-col w-full lg:w-[27rem] xl:w-[32rem]">
        {guessedCountriesWithAdditionalProps.length > 0 ? (
          <ul className="space-y-2">
            {guessedCountriesWithAdditionalProps.map((country, index) => (
              <li key={index} className="flex justify-between rounded-md bg-gray-100 p-1.5">
                <span>
                  {index + 1}. {country.name} {country.flag}
                </span>
                <span>{country.distanceAway} km away</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No country guessed yet. Please, take a guess!</p>
        )}
      </div>
    </div>
  );
}

export default GuessedCountriesList;
