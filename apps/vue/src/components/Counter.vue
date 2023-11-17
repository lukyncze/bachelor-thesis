<script setup lang="ts">
import {ref} from 'vue';
import Button from './Button.vue';

const count = ref(0);
</script>

<template>
  <div class="bg-gray-200 p-6 rounded-md shadow-md">
    <p class="text-xl font-semibold mb-4">Current count: {{ count }}</p>

    <div class="flex gap-4">
      <Button
        className="bg-blue-500 text-white hover:bg-blue-600"
        @click="count++"
        textContent="Increment"
      />

      <Button
        className="bg-orange-500 text-white hover:bg-orange-600"
        @click="count--"
        textContent="Decrement"
      />

      <Button
        className="bg-gray-500 text-white hover:bg-gray-600"
        @click="count = 0"
        textContent="Reset"
      />
    </div>
  </div>
</template>

