<template>
  <v-card :class="$style.container" elevation="8">
    <v-card-item>
      <v-card-title class="title">
        <span class="title-emoji">{{ emoji }}</span>
        <span :class="$style['title-label']">{{ title }}</span>
      </v-card-title>
    </v-card-item>
    <v-card-text>
      {{ text }}
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  emoji: { type: String, default: '' },
  title: { type: String, default: '' },
  text: { type: String, default: '' },
});
</script>

<style module lang="scss">
.container {
  @apply rounded-md !important;

  .title {
    &-emoji {
    }
    &-label {
      @apply font-extrabold text-red-200 !important;
    }
  }
}
</style>
