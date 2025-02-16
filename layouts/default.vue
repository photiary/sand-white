<template>
  <v-app>
    <v-app-bar app>
      <v-container class="flex justify-center gap-8">
        <v-btn prepend-icon="mdi-aurora" to="/">aurora</v-btn>
        <v-btn prepend-icon="mdi-weather-snowy" to="/snowy">snowy</v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
    <v-footer app>
      <v-container class="text-right">
        <p :class="$style.footer">Copywriter-abc v0.0.0</p>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
.footer {
  @apply text-sand-white-200 font-bold;
}
</style>
