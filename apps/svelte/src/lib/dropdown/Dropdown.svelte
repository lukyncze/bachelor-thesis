<script lang="ts">
  import {onMount} from 'svelte';
  import ArrowUp from './ArrowUp.svelte';
  import ArrowDown from './ArrowDown.svelte';
  import {dropdownVariantStyles, type DropdownVariant} from './dropdownVariants';
  import {dropdownSize, type DropdownSize} from './dropdownSize';

  export interface Option {
    label: string;
    value: string;
  }

  export let options: Option[];
  export let onChange: (selectedOption: Option | null) => void;
  export let defaultValue: Option | null = null;
  export let placeholder = 'Select an option';
  export let variant: DropdownVariant = 'primary';
  export let size: DropdownSize = 'md';

  let selectedOption: Option | null = defaultValue;
  let isOpen = false;
  let dropdownRef: HTMLDivElement;

  const handleOptionClick = (option: Option) => {
    selectedOption = option;
    isOpen = false;
    onChange(option);
  };

  const handleClickOutsideDropdown = (event: MouseEvent) => {
    if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
      isOpen = false;
    }
  };

  onMount(() => {
    document.addEventListener('click', handleClickOutsideDropdown);

    return () => {
      document.removeEventListener('click', handleClickOutsideDropdown);
    };
  });

  let {buttonStyles, divStyles, optionStyles} = dropdownVariantStyles[variant];
  let sizeStyles = dropdownSize[size];
</script>

<div class="relative inline-block text-left" bind:this={dropdownRef}>
  <div class="rounded-md shadow-sm">
    <button
      type="button"
      class={`inline-flex justify-center items-center w-full rounded-md ${sizeStyles} font-medium focus:outline-none focus:ring-1 focus:ring-offset-0.8 ${buttonStyles}`}
      on:click={() => (isOpen = !isOpen)}
    >
      {selectedOption ? selectedOption.label : placeholder}
      {#if isOpen}
        <ArrowUp />
      {:else}
        <ArrowDown />
      {/if}
    </button>
  </div>

  {#if isOpen}
    <div
      class={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-opacity-100 z-10 ${divStyles}`}
    >
      <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        {#each options as option (option.value)}
          <button
            class={`block w-full text-left px-4 py-2 text-sm hover:text-gray-900 ${optionStyles}`}
            role="menuitem"
            on:click={() => handleOptionClick(option)}
          >
            {option.label}
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>
