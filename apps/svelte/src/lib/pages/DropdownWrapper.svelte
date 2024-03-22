<script lang="ts">
  import Dropdown from '../components/dropdown/Dropdown.svelte';
  import {type DropdownSize} from '../components/dropdown/dropdownSize';
  import {type DropdownVariant} from '../components/dropdown/dropdownVariants';
  import {type Option} from '../components/dropdown/types';

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
    {label: 'Rose', value: '#be123c'},
    {label: 'Amber', value: '#b45309'},
    {label: 'Lime', value: '#4d7c0f'},
    {label: 'Cyan', value: '#0e7490'},
    {label: 'Indigo', value: '#4338ca'},
    {label: 'Fuchsia', value: '#a21caf'},
  ];

  const sizes: ReadonlyArray<DropdownSize> = ['sm', 'md', 'lg'];

  let selectedColor: Option | null = null;
</script>

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
