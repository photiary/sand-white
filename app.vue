<template>
  <div :class="$style.container">
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
.container {
  @apply bg-green-300 p-4;
}
</style>
