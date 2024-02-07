import {Country} from '../useCountries';
import Modal from './Modal';

interface WinModalProps {
  isOpen: boolean;
  handleClose: () => void;
  randomCountry: Country;
  totalTriesNeeded: number;
}

function WinModal({isOpen, handleClose, randomCountry, totalTriesNeeded}: WinModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      handleClose={handleClose}
      title="Congratulations, you have guessed the country correctly!"
    >
      The correct country was: {randomCountry.name.common}.
      <br />
      You have guessed the country in {totalTriesNeeded} tries.
    </Modal>
  );
}

export default WinModal;
