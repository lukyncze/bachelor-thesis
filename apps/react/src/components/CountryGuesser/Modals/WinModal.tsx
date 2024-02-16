import {Country} from '../country';
import BaseModal from './BaseModal';

interface WinModalProps {
  randomCountry: Country;
  totalGuessesNeeded: number;
  handleClose: () => void;
}

function WinModal({randomCountry, totalGuessesNeeded, handleClose}: WinModalProps) {
  return (
    <BaseModal
      title="Congratulations, you have guessed the country correctly!"
      handleClose={handleClose}
    >
      The correct country was: <strong>{randomCountry.name.common}</strong>.
      <br />
      You have guessed the country in {totalGuessesNeeded}{' '}
      {totalGuessesNeeded > 1 ? 'tries' : 'try'}.
    </BaseModal>
  );
}

export default WinModal;
