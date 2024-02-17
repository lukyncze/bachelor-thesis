import {HttpClient} from '@angular/common/http';
import {Injectable, inject} from '@angular/core';
import {retryBackoff} from 'backoff-rxjs';
import {Observable, catchError, map, tap, throwError} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {NoResponseError} from '../../../lib/errors';
import {Countries} from '../country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private static url = environment.countriesApiUrl;
  private static queryParams = environment.countriesApiQueryParams;
  private readonly httpClient = inject(HttpClient);

  public getCountries(): Observable<Countries> {
    const url = this.getRequestApiUrl();

    return this.httpClient.get<Countries>(url).pipe(
      tap(response => this.checkResponseLength(response)),
      map(response => this.sortCountriesByName(response)),
      retryBackoff({initialInterval: 1000, maxRetries: 3}),
      catchError(error => throwError(() => this.handleError(error))),
    );
  }

  private getRequestApiUrl(): string {
    return `${CountryService.url}${CountryService.queryParams}`;
  }

  private sortCountriesByName(response: Countries): Countries {
    return response.toSorted((a, b) => a.name.common.localeCompare(b.name.common));
  }

  private checkResponseLength(response: Countries): void {
    if (response.length === 0) {
      throw new NoResponseError('There are no countries to guess. Please try again later.');
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private handleError(error: any) {
    if (error instanceof NoResponseError) {
      return error;
    }

    return new Error(
      `There was an error with getting the countries data (${error.name}). Please reload the page.`,
    );
  }
}
