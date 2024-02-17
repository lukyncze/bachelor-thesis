import {Injectable} from '@angular/core';
import {Coordinate, getDistanceBetweenTwoPoints} from 'calculate-distance-between-coordinates';
import {Countries, Country} from '../country';
import {GuessedCountries} from '../country-guesser.component';

interface EnrichedGuessedCountry {
  name: string;
  flag: string;
  distanceFromRandomCountry: number;
}

export type EnrichedGuessedCountries = ReadonlyArray<EnrichedGuessedCountry>;

@Injectable({
  providedIn: 'root',
})
export class EnrichGuessedCountriesService {
  public enrich(
    countries: Countries,
    guessedCountries: GuessedCountries,
    randomCountry: Country,
  ): EnrichedGuessedCountries {
    return guessedCountries.map(countryName =>
      this.enrichGuessedCountry(countries, countryName, randomCountry),
    );
  }
  public enrichGuessedCountry(
    countries: Countries,
    countryName: string,
    randomCountry: Country,
  ): EnrichedGuessedCountry {
    const country = this.findCountryByName(countries, countryName);
    const distanceFromRandomCountry = this.calculateDistanceFromRandomCountry(
      country,
      randomCountry,
    );

    return {name: countryName, flag: country?.flag || '', distanceFromRandomCountry};
  }

  private findCountryByName(countries: Countries, countryName: string): Country | undefined {
    return countries.find(country => country.name.common === countryName);
  }

  private calculateDistanceFromRandomCountry(
    country: Country | undefined,
    randomCountry: Country,
  ): number {
    if (!country) return 0;

    const countryCoords = this.mapToCoordinate(country);
    const randomCountryCoords = this.mapToCoordinate(randomCountry);

    return Math.round(getDistanceBetweenTwoPoints(countryCoords, randomCountryCoords));
  }

  private mapToCoordinate(country: Country): Coordinate {
    const [lat, lon] = country.latlng;
    return {lat, lon};
  }
}
