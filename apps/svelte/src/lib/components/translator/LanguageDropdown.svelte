<script lang="ts">
  import Dropdown from '../dropdown/Dropdown.svelte';
  import {type Option} from '../dropdown/types';

  export let options: ReadonlyArray<Option>;
  export let onChange: (selectedLanguage: Option | null) => void;
</script>

<Dropdown
  {options}
  {onChange}
  defaultValue={options[0]}
  placeholder="Select a language for translation"
  variant="secondary"
/>
