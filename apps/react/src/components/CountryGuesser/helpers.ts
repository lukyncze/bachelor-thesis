import {Country} from './useCountries';

export const getRandomCountry = (countries: ReadonlyArray<Country>): Country => {
  return countries[Math.floor(Math.random() * countries.length)];
};
