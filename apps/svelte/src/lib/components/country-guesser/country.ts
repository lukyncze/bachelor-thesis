export interface Country {
  name: Name;
  area: number;
  population: number;
  landlocked: boolean;
  region: string;
  languages: Languages;
  capital: ReadonlyArray<string>;
  borders: ReadonlyArray<string>;
  flags: Flags;
  flag: string;
  latlng: ReadonlyArray<number>;
}

export type Countries = ReadonlyArray<Country>;

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface Name {
  common: string;
  official: string;
}

interface Languages {
  [key: string]: string;
}
