import {Country} from '../country';
import Modal from './Modal';

interface WinModalProps {
  isOpen: boolean;
  handleClose: () => void;
  randomCountry: Country;
  totalGuessesNeeded: number;
}

function WinModal({isOpen, handleClose, randomCountry, totalGuessesNeeded}: WinModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      handleClose={handleClose}
      title="Congratulations, you have guessed the country correctly!"
    >
      The correct country was: <strong>{randomCountry.name.common}</strong>.
      <br />
      You have guessed the country in {totalGuessesNeeded}{' '}
      {totalGuessesNeeded > 1 ? 'tries' : 'try'}.
    </Modal>
  );
}

export default WinModal;
