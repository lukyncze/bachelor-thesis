<script lang="ts">
  import {type Country} from '../country';
  import BaseModal from './BaseModal.svelte';

  export let randomCountry: Country;
  export let handleClose: () => void;
</script>

<BaseModal title="You have not guessed the country :(" {handleClose}>
  The correct country was: {randomCountry.name.common}.
</BaseModal>
