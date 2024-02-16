import {EnrichedGuessedCountries, getEnrichedGuessedCountries} from './helpers';
import {Countries, Country} from './country';
import {GuessedCountries} from './CountryGuesser';

interface GuessedCountriesListProps {
  countries: Countries;
  guessedCountries: GuessedCountries;
  randomCountry: Country;
}

function GuessedCountriesList({
  countries,
  guessedCountries,
  randomCountry,
}: GuessedCountriesListProps) {
  const enrichedGuessedCountries: EnrichedGuessedCountries = getEnrichedGuessedCountries(
    countries,
    guessedCountries,
    randomCountry,
  );

  return (
    <div className="border-t border-gray-300 pt-4 lg:border-t-0 lg:pt-0">
      <h2 className="text-xl font-bold mb-3">Guessed countries</h2>

      <div className="flex flex-col w-full lg:w-[27rem] xl:w-[32rem]">
        {enrichedGuessedCountries.length > 0 ? (
          <ul className="space-y-2">
            {enrichedGuessedCountries.map((country, index) => (
              <li key={index} className="flex justify-between rounded-md bg-gray-100 p-1.5">
                <span>
                  {index + 1}. {country.name} {country.flag}
                </span>
                <span>{country.distanceFromRandomCountry} km away</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No country guessed yet. Please, take a guess!</p>
        )}
      </div>

      {enrichedGuessedCountries.length > 0 ? (
        <p className="mt-4">Away distance is calculated from the center of each country.</p>
      ) : null}
    </div>
  );
}

export default GuessedCountriesList;
