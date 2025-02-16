<template>
  <v-btn :loading="isLoading" color="primary" @click="clickEvent">
    <v-icon v-if="icon">{{ icon }}</v-icon>
    <slot>Button</slot>
  </v-btn>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  icon: { type: String, default: '' },
});

const isLoading = ref(false);

const clickEvent = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
};
</script>

<style module lang="scss"></style>
