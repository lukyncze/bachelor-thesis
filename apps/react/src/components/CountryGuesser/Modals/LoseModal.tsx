import {Country} from '../country';
import BaseModal from './BaseModal';

interface LoseModalProps {
  randomCountry: Country;
  handleClose: () => void;
}

function LoseModal({randomCountry, handleClose}: LoseModalProps) {
  return (
    <BaseModal title="You have not guessed the country :(" handleClose={handleClose}>
      The correct country was: {randomCountry.name.common}.
    </BaseModal>
  );
}

export default LoseModal;
