import {useState} from 'react';
import {Country} from './useCountries';

interface CountryGuessProps {
  countries: ReadonlyArray<Country>;
  guess: string;
  setGuess: (value: string) => void;
}

const countryHintsCount = 8;

function CountryGuess({countries, guess, setGuess}: CountryGuessProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState<ReadonlyArray<Country>>([]);

  return (
    <div className="flex flex-col mx-auto">
      <div>
        <input
          type="text"
          value={guess}
          onClick={() => {
            setIsOpen(true);
            setFilteredCountries(countries.slice(0, countryHintsCount));
          }}
          onChange={({target}) => {
            setGuess(target.value);
            setFilteredCountries(
              countries
                .filter(country =>
                  country.name.common.toLowerCase().includes(target.value.toLowerCase()),
                )
                .slice(0, countryHintsCount),
            );
          }}
          className="mt-4 block rounded-md p-1.5 shadow-sm bg-slate-100 border border-gray-400"
        />
      </div>

      {isOpen ? (
        <div>
          {filteredCountries.map((country, index) => (
            <p
              key={index}
              onClick={event => {
                console.log(`testiiik clicku`);
                guess = country.name.common;
                event.stopPropagation();
              }}
            >
              {country.name.common}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default CountryGuess;
