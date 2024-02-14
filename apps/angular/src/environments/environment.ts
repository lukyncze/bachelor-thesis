export const environment = {
  production: false,
  // https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/microsoft-translator-text
  translatorApiUrl: 'https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=',
  translatorApiQueryParams: '&api-version=3.0&profanityAction=NoAction&textType=plain',
  translatorApiKey: '207660cac7msh7d9d993dff8c7b9p108d1ejsnb2600aa8c815',
  // https://restcountries.com/
  countriesApiUrl: 'https://restcountries.com/v3.1/all',
  countriesApiQueryParams:
    '?fields=name,area,population,landlocked,region,languages,capital,borders,flags,flag,latlng',
};
