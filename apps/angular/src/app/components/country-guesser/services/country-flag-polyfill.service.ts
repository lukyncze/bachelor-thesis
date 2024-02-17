import {Injectable} from '@angular/core';
import {polyfillCountryFlagEmojis} from 'country-flag-emoji-polyfill';

@Injectable({
  providedIn: 'root',
})
export class CountryFlagPolyfillService {
  public usePolyfill(): void {
    polyfillCountryFlagEmojis();
  }
}
