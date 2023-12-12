import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, map} from 'rxjs';

type TranslationResponseData = ReadonlyArray<TranslationResponse>;

interface TranslationResponse {
  detectedLanguage: DetectedLanguage;
  translations: ReadonlyArray<Translation>;
}

interface DetectedLanguage {
  language: string;
  score: number;
}

interface Translation {
  text: string;
  to: string;
}

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private static url = 'https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=';
  private static queryParams = '&api-version=3.0&profanityAction=NoAction&textType=plain';
  private static apiKey = '207660cac7msh7d9d993dff8c7b9p108d1ejsnb2600aa8c815';

  constructor(private readonly httpClient: HttpClient) {}

  public getTranslation(inputText: string, outputLanguage: string): Observable<string> {
    const parsedInputText = inputText.replace(/\n/g, '');
    const url = `${TranslationService.url}${outputLanguage}${TranslationService.queryParams}`;
    const body = `[{"Text":"${parsedInputText}"}]`;
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': TranslationService.apiKey,
        'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
      },
    };

    return this.httpClient
      .post<TranslationResponseData>(url, body, options)
      .pipe(map(data => this.convertToOutputText(data)));
  }

  private convertToOutputText(data: TranslationResponseData): string {
    return data[0].translations[0].text;
  }
}
