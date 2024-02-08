import {Country} from './useCountries';

export const getRandomCountry = (countries: ReadonlyArray<Country>): Country => {
  return countries[Math.floor(Math.random() * countries.length)];
};

export const getGuessedCountriesWithFlags = (
  countries: ReadonlyArray<Country>,
  guessedCountries: ReadonlyArray<string>,
) => {
  return guessedCountries.map(countryName => ({
    name: countryName,
    flag: findCountryByName(countries, countryName)?.flag || '',
  }));
};

const findCountryByName = (
  countries: ReadonlyArray<Country>,
  countryName: string,
): Country | undefined => {
  return countries.find(country => country.name.common === countryName);
};
