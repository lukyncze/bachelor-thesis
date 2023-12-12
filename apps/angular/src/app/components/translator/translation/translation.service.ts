import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, map} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {RequestOptions, TranslationResponseData} from './types';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private static url = environment.translatorApiUrl;
  private static queryParams = environment.translatorApiQueryParams;
  private static apiKey = environment.translatorApiKey;

  constructor(private readonly httpClient: HttpClient) {}

  public getTranslation(inputText: string, outputLanguage: string): Observable<string> {
    const url = this.getRequestApiUrl(outputLanguage);
    const body = this.getRequestBody(inputText);
    const options = this.getRequestOptions();

    return this.httpClient
      .post<TranslationResponseData>(url, body, options)
      .pipe(map(data => this.convertToOutputText(data)));
  }

  private convertToOutputText(data: TranslationResponseData): string {
    return data[0].translations[0].text;
  }

  private getRequestApiUrl(outputLanguage: string): string {
    return `${TranslationService.url}${outputLanguage}${TranslationService.queryParams}`;
  }

  private getRequestBody(inputText: string): string {
    return `[{"Text":"${this.getParsedInputText(inputText)}"}]`;
  }

  private getParsedInputText(inputText: string): string {
    return inputText.replace(/\n/g, ' ');
  }

  private getRequestOptions(): RequestOptions {
    return {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': TranslationService.apiKey,
        'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
      },
    };
  }
}
