<script lang="ts">
  import Counter from './lib/Counter.svelte';
  import Dropdown from './lib/dropdown/Dropdown.svelte';
  import {type DropdownVariant} from './lib/dropdown/dropdownVariants';

  // TODO: Remove then...
  interface Option {
    label: string;
    value: string;
  }

  const dropdownVariants: ReadonlyArray<DropdownVariant> = [
    'primary',
    'secondary',
    'neutral',
    'light',
    'dark',
    'info',
    'success',
    'warning',
    'error',
  ];

  const colors = [
    {label: 'Alice Blue', value: '#F0F8FF'},
    {label: 'Antique White', value: '#FAEBD7'},
    {label: 'Aqua', value: '#00FFFF'},
    {label: 'Aquamarine', value: '#7FFFD4'},
    {label: 'Azure', value: '#F0FFFF'},
    {label: 'Beige', value: '#F5F5DC'},
  ];

  let selectedColor: Option | null = null;
</script>

<main>
  <h1>Svelte Landing Page</h1>

  <Counter />

  <div class="flex gap-2 justify-center items-center h-20">
    {#each dropdownVariants as variant (variant)}
      <Dropdown
        options={colors}
        defaultValue={selectedColor}
        placeholder="Select a color"
        onChange={option => (selectedColor = option)}
        size="sm"
        {variant}
      />
    {/each}
  </div>

  <div class="flex gap-2 justify-center items-center h-20">
    {#each dropdownVariants as variant (variant)}
      <Dropdown
        options={colors}
        defaultValue={selectedColor}
        placeholder="Select a color"
        onChange={option => (selectedColor = option)}
        size="md"
        {variant}
      />
    {/each}
  </div>

  <div class="flex gap-2 justify-center items-center h-20">
    {#each dropdownVariants as variant (variant)}
      <Dropdown
        options={colors}
        defaultValue={selectedColor}
        placeholder="Select a color"
        onChange={option => (selectedColor = option)}
        size="lg"
        {variant}
      />
    {/each}
  </div>
</main>
