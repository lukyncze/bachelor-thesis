import {Coordinate, getDistanceBetweenTwoPoints} from 'calculate-distance-between-coordinates';
import {Country} from './country';

// TODO: Rewrite into Angular service!

interface GuessedCountryWithAdditionalProps {
  name: string;
  flag: string;
  distanceAway: number;
}

export type GuessedCountriesWithAdditionalProps = ReadonlyArray<GuessedCountryWithAdditionalProps>;

export const getGuessedCountriesWithAdditionalProps = (
  countries: ReadonlyArray<Country>,
  guessedCountries: ReadonlyArray<string>,
  randomCountry: Country,
): GuessedCountriesWithAdditionalProps => {
  return guessedCountries.map(countryName => {
    const country = findCountryByName(countries, countryName);
    const distanceAway = calculateDistanceFromRandomCountry(country, randomCountry);

    return {name: countryName, flag: country?.flag || '', distanceAway};
  });
};

const findCountryByName = (
  countries: ReadonlyArray<Country>,
  countryName: string,
): Country | undefined => {
  return countries.find(country => country.name.common === countryName);
};

const calculateDistanceFromRandomCountry = (
  country: Country | undefined,
  randomCountry: Country,
): number => {
  if (!country) return 0;

  const countryCoords = mapToCoordinate(country);
  const randomCountryCoords = mapToCoordinate(randomCountry);

  return Math.round(getDistanceBetweenTwoPoints(countryCoords, randomCountryCoords));
};

const mapToCoordinate = (country: Country): Coordinate => {
  const [lat, lon] = country.latlng;
  return {lat, lon};
};
