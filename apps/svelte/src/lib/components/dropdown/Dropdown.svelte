<script lang="ts" context="module">
  export interface Option {
    label: string;
    value: string;
  }
</script>

<script lang="ts">
  import {onMount} from 'svelte';
  import ArrowUp from './ArrowUp.svelte';
  import ArrowDown from './ArrowDown.svelte';
  import {dropdownVariantStyles, type DropdownVariant} from './dropdownVariants';
  import {dropdownSize, type DropdownSize} from './dropdownSize';

  export let options: Option[];
  export let onChange: (selectedOption: Option | null) => void;
  export let defaultValue: Option | null = null;
  export let placeholder = 'Select an option';
  export let variant: DropdownVariant = 'primary';
  export let size: DropdownSize = 'md';

  let selectedOption: Option | null = defaultValue;
  let isOpen = false;
  let dropdownId = `id-${crypto.randomUUID()}`;

  const handleOptionClick = (option: Option) => {
    selectedOption = option;
    isOpen = false;
    onChange(option);
  };

  // TODO: try to make it as a action :)
  const handleClickOutsideDropdown = ({target}: PointerEvent) => {
    if (isOpen && !(target as HTMLElement).closest(`#${dropdownId}`)) {
      isOpen = false;
    }
  };

  onMount(() => {
    document.addEventListener('pointerdown', handleClickOutsideDropdown);

    return () => {
      document.removeEventListener('pointerdown', handleClickOutsideDropdown);
    };
  });

  const {buttonStyles, divStyles, optionStyles} = dropdownVariantStyles[variant];
  const sizeStyles = dropdownSize[size];
</script>

<div class="relative inline-block text-left" id={dropdownId}>
  <div class="rounded-md shadow-sm">
    <!-- https://chiamakaikeanyi.dev/what-is-event-bubbling-and-capturing-and-how-to-handle-them/ -->
    <!-- https://www.freecodecamp.org/news/a-simplified-explanation-of-event-propagation-in-javascript-f9de7961a06e/ -->
    <button
      type="button"
      class={`inline-flex justify-center items-center w-full rounded-md ${sizeStyles} font-medium focus:outline-none focus:ring-1 focus:ring-offset-0.8 ${buttonStyles}`}
      on:click|stopPropagation={() => (isOpen = !isOpen)}
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
