export type RequestOptions = {
  method: string;
  headers: {
    'content-type': string;
    'X-RapidAPI-Key': string;
    'X-RapidAPI-Host': string;
  };
};

export type TranslationResponseData = ReadonlyArray<TranslationResponse>;

type TranslationResponse = {
  detectedLanguage: DetectedLanguage;
  translations: ReadonlyArray<Translation>;
};

type DetectedLanguage = {
  language: string;
  score: number;
};

type Translation = {
  text: string;
  to: string;
};
