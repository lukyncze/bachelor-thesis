import {useState} from 'react';
import {Country} from './useCountries';
import HintBoxes from './HintBoxes/HintBoxes';
import CountryGuessInput from './CountryGuessInput';
import WinModal from './Modals/WinModal';
import LoseModal from './Modals/LoseModal';
import {getRandomCountry} from './helpers';
import GuessedCountriesList from './GuessedCountriesList';

interface CountryGuesserProps {
  countries: ReadonlyArray<Country>;
}

const defaultHintsEnabledCount = 1;
const maximumCountryGuesses = 8;

function CountryGuesser({countries}: CountryGuesserProps) {
  const [randomCountry, setRandomCountry] = useState<Country>(() => getRandomCountry(countries));
  const [guessedCountries, setGuessedCountries] = useState<ReadonlyArray<string>>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [hintsEnabledCount, setHintsEnabledCount] = useState(defaultHintsEnabledCount);
  const [totalGuessesNeeded, setTotalGuessesNeeded] = useState(1);
  const [isWinModalOpen, setIsWinModalOpen] = useState(false);
  const [isLoseModalOpen, setIsLoseModalOpen] = useState(false);
  console.log(`🚀 ~ CountryGuesser ~ randomCountry:`, randomCountry.name.common);

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

    setCurrentGuess('');
    setGuessedCountries([...guessedCountries, currentGuess]);
    setHintsEnabledCount(hintsEnabledCount + 1);
  };

  const handleSetInitialState = () => {
    setRandomCountry(getRandomCountry(countries));
    setCurrentGuess('');
    setGuessedCountries([]);
    setHintsEnabledCount(defaultHintsEnabledCount);
  };

  return (
    <>
      <div className="container mx-auto space-y-8">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-4">
          <HintBoxes randomCountry={randomCountry} hintsEnabledCount={hintsEnabledCount} />
        </div>

        <div className="flex items-start justify-center gap-2 md:gap-12">
          <CountryGuessInput
            countries={countries}
            currentGuess={currentGuess}
            setCurrentGuess={setCurrentGuess}
            evaluateGuessAndUpdateState={evaluateGuessAndUpdateState}
            guessedCountries={guessedCountries}
          />
          <GuessedCountriesList countries={countries} guessedCountries={guessedCountries} />
        </div>
      </div>

      <WinModal
        isOpen={isWinModalOpen}
        handleClose={() => {
          handleSetInitialState();
          setIsWinModalOpen(false);
        }}
        randomCountry={randomCountry}
        totalGuessesNeeded={totalGuessesNeeded}
      />
      <LoseModal
        isOpen={isLoseModalOpen}
        handleClose={() => {
          handleSetInitialState();
          setIsLoseModalOpen(false);
        }}
        randomCountry={randomCountry}
      />
    </>
  );
}

export default CountryGuesser;
