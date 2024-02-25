<script lang="ts">
  import ArrowUpIcon from '../icons/ArrowUpIcon.svelte';
  import ArrowDownIcon from '../icons/ArrowDownIcon.svelte';
  import {dropdownVariantStyles, type DropdownVariant} from './dropdownVariants';
  import {dropdownSize, type DropdownSize} from './dropdownSize';
  import {type Option} from './types';
  import {clickOutsideDropdown} from './clickOutsideDropdown';

  export let options: ReadonlyArray<Option>;
  export let onChange: (selectedOption: Option | null) => void;
  export let defaultValue: Option | null = null;
  export let placeholder = 'Select an option';
  export let variant: DropdownVariant = 'primary';
  export let size: DropdownSize = 'md';

  let selectedOption: Option | null = defaultValue;
  let isOpen = false;

  // Toto ID je třeba nastavit na root element dropdown komponenty.
  let dropdownId = `id-${crypto.randomUUID()}`;

  // Ubslužná funkce, která se stará o logiku po kliknutí na jednotlivé položky v dropdownu.
  const handleOptionClick = (option: Option) => {
    selectedOption = option;
    isOpen = false;
    onChange(option);
  };

  // Ubslužná funkce, která zavře dropdown, pokud uživatel klikne mimo něj.
  const handleClickOutsideDropdown = ({target}: PointerEvent) => {
    if (isOpen && !(target as HTMLElement).closest(`#${dropdownId}`)) {
      isOpen = false;
    }
  };

  const {buttonStyles, divStyles, optionStyles} = dropdownVariantStyles[variant];
  const sizeStyles = dropdownSize[size];
</script>

<!-- Dynamické atributy nastavujeme pomocí NÁZEV_ATRIBUTU={HODNOTA}. -->
<!-- Svelte nebo vlastní akci přidáme na element/komponentu pomocí use:NÁZEV_AKCE. -->
<div
  class="relative inline-block text-left"
  id={dropdownId}
  use:clickOutsideDropdown={handleClickOutsideDropdown}
>
  <div class="rounded-md shadow-sm">
    <!-- Pro poslouchání na události v DOMu můžeme použít syntaxi: on:NÁZEV_UDÁLOSTI={OBSLUŽNÁ_METODA}. -->
    <button
      type="button"
      class={`inline-flex justify-center items-center w-full rounded-md ${sizeStyles} font-medium focus:outline-none focus:ring-1 focus:ring-offset-0.8 ${buttonStyles}`}
      on:click|stopPropagation={() => (isOpen = !isOpen)}
    >
      {selectedOption ? selectedOption.label : placeholder}
      <!-- Pro podmíněné vykreslovaní můžeme využít bloky #if, :else if, :else a /if. -->
      {#if isOpen}
        <ArrowUpIcon />
      {:else}
        <ArrowDownIcon />
      {/if}
    </button>
  </div>

  {#if isOpen}
    <div
      class={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-opacity-100 z-10 ${divStyles}`}
    >
      <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <!-- Pro vykreslení listu (pole hodnot) můžeme využít blok #each. -->
        {#each options as option}
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
