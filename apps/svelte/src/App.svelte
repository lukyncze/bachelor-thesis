<script lang="ts">
  import Counter from './lib/Counter.svelte';
  import Dropdown, {type Option} from './lib/dropdown/Dropdown.svelte';
  import type {DropdownSize} from './lib/dropdown/dropdownSize';
  import {type DropdownVariant} from './lib/dropdown/dropdownVariants';

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

  const sizes: ReadonlyArray<DropdownSize> = ['sm', 'md', 'lg'];

  let selectedColor: Option | null = null;
</script>

<main>
  <h1>Svelte Landing Page</h1>

  <Counter />

  {#each sizes as size}
    <div class="flex gap-2 justify-center items-center h-20">
      {#each dropdownVariants as variant}
        <Dropdown
          options={colors}
          defaultValue={selectedColor}
          placeholder="Select a color"
          onChange={option => (selectedColor = option)}
          {size}
          {variant}
        />
      {/each}
    </div>
  {/each}
</main>
