import {useState} from 'react';
import {Countries, Country} from './country';
import HintBoxes from './HintBoxes/HintBoxes';
import CountryGuessInput from './CountryGuessInput';
import WinModal from './Modals/WinModal';
import LoseModal from './Modals/LoseModal';
import {getRandomCountry} from './helpers';
import GuessedCountriesList from './GuessedCountriesList';
import useCountryFlagPolyfill from './hooks/useCountryFlagPolyfill';

export type GuessedCountries = ReadonlyArray<string>;

interface CountryGuesserProps {
  countries: Countries;
}

const defaultHintsEnabledCount = 1;
const maximumCountryGuesses = 8;

function CountryGuesser({countries}: CountryGuesserProps) {
  const [randomCountry, setRandomCountry] = useState<Country>(() => getRandomCountry(countries));
  const [guessedCountries, setGuessedCountries] = useState<GuessedCountries>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [hintsEnabledCount, setHintsEnabledCount] = useState(defaultHintsEnabledCount);
  const [totalGuessesNeeded, setTotalGuessesNeeded] = useState(1);
  const [isWinModalOpen, setIsWinModalOpen] = useState(false);
  const [isLoseModalOpen, setIsLoseModalOpen] = useState(false);

  useCountryFlagPolyfill();

  const hasGuessedCountry = () => currentGuess === randomCountry.name.common;
  const hasReachedMaximumGuesses = () => guessedCountries.length + 1 === maximumCountryGuesses;

  const evaluateGuessAndUpdateState = () => {
    if (hasGuessedCountry()) {
      setHintsEnabledCount(maximumCountryGuesses);
      setTotalGuessesNeeded(guessedCountries.length + 1);
      setIsWinModalOpen(true);
      return;
    }

    if (hasReachedMaximumGuesses() && !hasGuessedCountry()) {
      setIsLoseModalOpen(true);
      return;
    }

    setGuessedCountries([...guessedCountries, currentGuess]);
    setCurrentGuess('');
    setHintsEnabledCount(previousCount => previousCount + 1);
  };

  const handleSetInitialState = () => {
    setRandomCountry(getRandomCountry(countries));
    setGuessedCountries([]);
    setCurrentGuess('');
    setHintsEnabledCount(defaultHintsEnabledCount);
  };

  return (
    <>
      <div className="container mx-auto space-y-6 sm:space-y-8">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-4">
          <HintBoxes randomCountry={randomCountry} hintsEnabledCount={hintsEnabledCount} />
        </div>

        <div className="space-y-6 lg:flex lg:justify-center lg:gap-12 lg:space-y-0">
          <CountryGuessInput
            countries={countries}
            currentGuess={currentGuess}
            guessedCountries={guessedCountries}
            setCurrentGuess={setCurrentGuess}
            evaluateGuessAndUpdateState={evaluateGuessAndUpdateState}
          />

          <GuessedCountriesList
            countries={countries}
            guessedCountries={guessedCountries}
            randomCountry={randomCountry}
          />
        </div>
      </div>

      {isWinModalOpen ? (
        <WinModal
          randomCountry={randomCountry}
          totalGuessesNeeded={totalGuessesNeeded}
          handleClose={() => {
            handleSetInitialState();
            setIsWinModalOpen(false);
          }}
        />
      ) : null}

      {isLoseModalOpen ? (
        <LoseModal
          randomCountry={randomCountry}
          handleClose={() => {
            handleSetInitialState();
            setIsLoseModalOpen(false);
          }}
        />
      ) : null}
    </>
  );
}

export default CountryGuesser;
