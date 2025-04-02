<template>
  <div class="flex flex-col gap-4" :class="$style.container">
    <v-card
      v-for="(card, index) in cards"
      ref="cardRefs"
      :key="index"
      :class="{ [$style.on]: card.isVisible }"
      :data-card-index="index"
      class="mx-auto h-64"
      prepend-icon="mdi-weather-sunny"
      width="400"
    >
      <template #title>
        <span class="font-extrabold">Welcome to Vuetify</span>
      </template>

      <v-card-text class="bg-sand-white-200 p-2">
        Tailwindcss style card.
        {{ x }} , {{ y }}
        {{ card.isVisible }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { useMouse, useIntersectionObserver } from '@vueuse/core';

const { x, y } = useMouse();

const cardRefs = ref([]);
const cards = ref(Array.from({ length: 8 }, () => ({ isVisible: false })));
useIntersectionObserver(
  cardRefs,
  (entries) => {
    entries.forEach((entry) => {
      const cardIndex = entry.target.dataset.cardIndex;
      cards.value[cardIndex].isVisible = entry.isIntersecting;
    });
  },
  { rootMargin: '0px 0px -72px 0px', threshold: 0 } // viewport 기준을 footer 높이(72px) 위로 올린다.
);
</script>

<style module lang="scss">
.container {
  .on {
    @apply bg-red-300 transition-colors duration-1000 !important;
  }
}
</style>
