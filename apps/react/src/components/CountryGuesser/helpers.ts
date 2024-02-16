import {Coordinate, getDistanceBetweenTwoPoints} from 'calculate-distance-between-coordinates';
import {Countries, Country} from './country';
import {GuessedCountries} from './CountryGuesser';

interface GuessedCountryWithAdditionalProps {
  name: string;
  flag: string;
  distanceAway: number;
}

export const getRandomCountry = (countries: Countries): Country => {
  return countries[Math.floor(Math.random() * countries.length)];
};

export const getGuessedCountriesWithAdditionalProps = (
  countries: Countries,
  guessedCountries: GuessedCountries,
  randomCountry: Country,
): ReadonlyArray<GuessedCountryWithAdditionalProps> => {
  return guessedCountries.map(countryName => {
    const country = findCountryByName(countries, countryName);
    const distanceAway = calculateDistanceFromRandomCountry(country, randomCountry);

    return {name: countryName, flag: country?.flag || '', distanceAway};
  });
};

const findCountryByName = (countries: Countries, countryName: string): Country | undefined => {
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
