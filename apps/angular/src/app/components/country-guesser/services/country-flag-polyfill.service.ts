import {Injectable} from '@angular/core';
import {polyfillCountryFlagEmojis} from 'country-flag-emoji-polyfill';

// Tato služba slouží k načtení polyfillu pro zobrazení vlajek států.
@Injectable({
  providedIn: 'root',
})
export class CountryFlagPolyfillService {
  public usePolyfill(): void {
    polyfillCountryFlagEmojis();
  }
}
