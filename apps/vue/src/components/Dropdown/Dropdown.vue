<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount} from 'vue';
import {dropdownSize, DropdownSize} from './dropdownSize';
import {DropdownVariant, dropdownVariantStyles} from './dropdownVariants';
import ArrowDown from './ArrowDown.vue';
import ArrowUp from './ArrowUp.vue';
import {Option} from './types';

interface Props {
  options: ReadonlyArray<Option>;
  onChange: (selectedOption: Option | null) => void;
  defaultValue?: Option | null;
  placeholder?: string;
  variant?: DropdownVariant;
  size?: DropdownSize;
}

const props = withDefaults(defineProps<Props>(), {
  defaultValue: null,
  placeholder: 'Select an option',
  variant: 'primary',
  size: 'md',
});

const selectedOption = ref<Option | null>(props.defaultValue);
const isOpen = ref(false);

// Toto ID je třeba nastavit na root element dropdown komponenty
const dropdownId = `id-${crypto.randomUUID()}`;

const handleOptionClick = (option: Option) => {
  selectedOption.value = option;
  isOpen.value = false;
  props.onChange(option);
};

const handleClickOutsideDropdown = ({target}: PointerEvent) => {
  if (!(target as HTMLElement).closest(`#${dropdownId}`)) {
    isOpen.value = false;
  }
};

onMounted(() => document.addEventListener('pointerdown', handleClickOutsideDropdown));

onBeforeUnmount(() => document.removeEventListener('pointerdown', handleClickOutsideDropdown));

const {buttonStyles, divStyles, optionStyles} = dropdownVariantStyles[props.variant];
const sizeStyles = dropdownSize[props.size];
</script>

<template>
  <div class="relative inline-block text-left" :id="dropdownId">
    <div class="rounded-md shadow-sm">
      <button
        type="button"
        class="inline-flex justify-center items-center w-full rounded-md font-medium focus:outline-none focus:ring-1 focus:ring-offset-0.8"
        :class="[sizeStyles, buttonStyles]"
        @click.stop="isOpen = !isOpen"
      >
        {{ selectedOption ? selectedOption.label : placeholder }}
        <ArrowUp v-if="isOpen" />
        <ArrowDown v-else />
      </button>
    </div>

    <div
      v-if="isOpen"
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-opacity-100 z-10"
      :class="divStyles"
    >
      <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <button
          v-for="option in options"
          :key="option.value"
          class="block w-full text-left px-4 py-2 text-sm hover:text-gray-900"
          :class="optionStyles"
          role="menuitem"
          @click="handleOptionClick(option)"
        >
          {{ option.label }}
        </button>
      </div>
    </div>
  </div>
</template>

