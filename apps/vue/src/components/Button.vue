<script setup lang="ts">
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

