import {Country} from '../country';
import Modal from './Modal';

interface WinModalProps {
  randomCountry: Country;
  totalGuessesNeeded: number;
  handleClose: () => void;
}

function WinModal({randomCountry, totalGuessesNeeded, handleClose}: WinModalProps) {
  return (
    <Modal
      title="Congratulations, you have guessed the country correctly!"
      handleClose={handleClose}
    >
      The correct country was: <strong>{randomCountry.name.common}</strong>.
      <br />
      You have guessed the country in {totalGuessesNeeded}{' '}
      {totalGuessesNeeded > 1 ? 'tries' : 'try'}.
    </Modal>
  );
}

export default WinModal;
