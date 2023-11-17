<script setup lang="ts">
import {defineProps} from 'vue';

interface Props {
  className: string;
  onClick: () => void;
  textContent: string;
}

const props = defineProps<Props>();
</script>

<template>
  <button
    :class="`px-4 py-2 rounded-md focus:outline-none ${props.className}`"
    @click="props.onClick"
  >
    {{ props.textContent }}
  </button>
</template>

