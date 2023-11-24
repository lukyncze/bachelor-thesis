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
  {label: 'Alice Blue', value: '#F0F8FF'},
  {label: 'Antique White', value: '#FAEBD7'},
  {label: 'Aqua', value: '#00FFFF'},
  {label: 'Aquamarine', value: '#7FFFD4'},
  {label: 'Azure', value: '#F0FFFF'},
  {label: 'Beige', value: '#F5F5DC'},
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

