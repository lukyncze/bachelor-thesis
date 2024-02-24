import {Coordinate, getDistanceBetweenTwoPoints} from 'calculate-distance-between-coordinates';
import {GuessedCountries} from './CountryGuesser';
import {Countries, Country} from './country';

interface EnrichedGuessedCountry {
  name: string;
  flag: string;
  distanceFromRandomCountry: number;
}

export type EnrichedGuessedCountries = ReadonlyArray<EnrichedGuessedCountry>;

export const getRandomCountry = (countries: Countries): Country => {
  return countries[Math.floor(Math.random() * countries.length)];
};

// Tato funkce slouží k obohacení seznamu uhodnutých zemí. Obohacení zahrnuje vlajku a vzdálenost od náhodné země.
export const getEnrichedGuessedCountries = (
  countries: Countries,
  guessedCountries: GuessedCountries,
  randomCountry: Country,
): EnrichedGuessedCountries => {
  return guessedCountries.map(countryName =>
    enrichGuessedCountry(countries, countryName, randomCountry),
  );
};

const enrichGuessedCountry = (
  countries: Countries,
  countryName: string,
  randomCountry: Country,
): EnrichedGuessedCountry => {
  const country = findCountryByName(countries, countryName);
  const distanceFromRandomCountry = calculateDistanceFromRandomCountry(country, randomCountry);

  return {name: countryName, flag: country?.flag || '', distanceFromRandomCountry};
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
