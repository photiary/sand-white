<template>
  <v-card :class="$style.container" elevation="8">
    <v-card-item>
      <v-card-title class="title">
        <span :class="$style['title-emoji']">{{ emoji }}</span>
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
  @apply mx-auto w-full max-w-screen-md rounded-md border border-sand-white-300 border-transparent bg-sand-white-100 p-2 transition-colors !important;

  &:hover {
    @apply border border-red-300 !important;

    .title {
      &-emoji {
        @apply rotate-180;
      }
    }
  }

  .title {
    &-emoji {
      @apply inline-block origin-center rotate-0 transform-gpu text-center text-2xl transition-transform ease-in-out;
    }
    &-label {
      @apply text-4xl font-extrabold text-red-400;
    }
  }
}
</style>
