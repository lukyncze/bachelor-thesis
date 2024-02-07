import {useState} from 'react';
import {Country} from './useCountries';
import HintBoxes from './HintBoxes';
import CountryGuess from './CountryGuess';
import WinModal from './Modals/WinModal';
import LoseModal from './Modals/LoseModal';
import {getRandomCountry} from './helpers';

interface CountryGuesserProps {
  countries: ReadonlyArray<Country>;
}

const defaultHintsEnabledCount = 1;
const maximumCountryGuesses = 8;

function CountryGuesser({countries}: CountryGuesserProps) {
  const [randomCountry, setRandomCountry] = useState<Country>(() => getRandomCountry(countries));
  const [guessedCountries, setGuessedCountries] = useState<ReadonlyArray<string>>([]);
  const [hintsEnabledCount, setHintsEnabledCount] = useState(defaultHintsEnabledCount);

  const [isWinModalOpen, setIsWinModalOpen] = useState(false);
  const [isLoseModalOpen, setIsLoseModalOpen] = useState(false);

  const hasGuessedCountry = (countryName: string) => countryName === randomCountry.name.common;
  const hasReachedMaximumGuesses = () => guessedCountries.length + 1 === maximumCountryGuesses;

  const handleSetGuessedCountries = (countryName: string) => {
    setGuessedCountries([...guessedCountries, countryName]);
    setHintsEnabledCount(hintsEnabledCount + 1);

    if (hasGuessedCountry(countryName)) {
      setHintsEnabledCount(maximumCountryGuesses);
      setIsWinModalOpen(true);
      return;
    }

    if (hasReachedMaximumGuesses() && !hasGuessedCountry(countryName)) {
      setIsLoseModalOpen(true);
      return;
    }
  };

  const handleSetInitialState = () => {
    setRandomCountry(getRandomCountry(countries));
    setGuessedCountries([]);
    setHintsEnabledCount(defaultHintsEnabledCount);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4">
        <HintBoxes randomCountry={randomCountry} hintsEnabledCount={hintsEnabledCount} />
      </div>

      <div className="flex flex-col items-center justify-center">
        <CountryGuess countries={countries} setCurrentGuess={handleSetGuessedCountries} />
      </div>

      <WinModal
        isOpen={isWinModalOpen}
        handleClose={() => {
          handleSetInitialState();
          setIsWinModalOpen(false);
        }}
        randomCountry={randomCountry}
        totalTriesNeeded={hintsEnabledCount}
      />
      <LoseModal
        isOpen={isLoseModalOpen}
        handleClose={() => {
          handleSetInitialState();
          setIsLoseModalOpen(false);
        }}
        randomCountry={randomCountry}
      />
    </div>
  );
}

export default CountryGuesser;
