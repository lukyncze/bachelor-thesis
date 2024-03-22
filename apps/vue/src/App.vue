<script setup lang="ts">
import {ref} from 'vue';
import Counter from './components/Counter.vue';
import Dropdown from './components/Dropdown/Dropdown.vue';
import {DropdownSize} from './components/Dropdown/dropdownSize';
import {Option} from './components/Dropdown/types';

const dropdownVariants: ReadonlyArray<string> = [
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

const selectedColor = ref<Option | null>(null);
</script>

<template>
  <h1>Vue Landing Page</h1>

  <Counter />

  <template v-for="size in sizes" :key="size">
    <div className="flex gap-2 justify-center items-center h-20">
      <template v-for="variant in dropdownVariants" :key="variant">
        <Dropdown
          :options="colors"
          :defaultValue="selectedColor"
          :placeholder="'Select a color'"
          :onChange="(selectedOption: Option | null) => selectedColor = selectedOption"
          :size="size"
          :variant="variant"
        />
      </template>
    </div>
  </template>
</template>

