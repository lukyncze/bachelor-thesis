<script lang="ts">
  import {type Country} from '../country';
  import BaseModal from './BaseModal.svelte';

  export let randomCountry: Country;
  export let totalGuessesNeeded: number;
  export let handleClose: () => void;
</script>

<BaseModal title="Congratulations, you have guessed the country correctly!" {handleClose}>
  The correct country was: <strong>{randomCountry.name.common}</strong>.
  <br />
  You have guessed the country in {totalGuessesNeeded}
  {totalGuessesNeeded > 1 ? 'tries' : 'try'}.
</BaseModal>
