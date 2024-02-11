import {Country} from '../country';
import Modal from './Modal';

interface LoseModalProps {
  isOpen: boolean;
  handleClose: () => void;
  randomCountry: Country;
}

function LoseModal({isOpen, handleClose, randomCountry}: LoseModalProps) {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose} title="You have not guessed the country :(">
      The correct country was: {randomCountry.name.common}.
    </Modal>
  );
}

export default LoseModal;
