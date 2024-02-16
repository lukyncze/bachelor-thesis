import {Country} from '../country';
import Modal from './Modal';

interface LoseModalProps {
  randomCountry: Country;
  handleClose: () => void;
}

function LoseModal({randomCountry, handleClose}: LoseModalProps) {
  return (
    <Modal title="You have not guessed the country :(" handleClose={handleClose}>
      The correct country was: {randomCountry.name.common}.
    </Modal>
  );
}

export default LoseModal;
