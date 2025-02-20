<template>
  <v-timeline align="start" side="end" truncate-line="both">
    <v-timeline-item dot-color="pink" size="small">
      <div class="d-flex">
        <strong class="me-4">5pm</strong>
        <div>
          <strong>New Icon</strong>
          <div class="text-caption">Mobile App</div>
        </div>
      </div>
    </v-timeline-item>

    <v-timeline-item dot-color="teal-lighten-3" size="small">
      <div class="d-flex">
        <strong class="me-4">0am</strong>
        <div>
          <strong>Design Stand Up</strong>
          <div class="text-caption">GitHub Deploy!</div>
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup lang="ts"></script>

<style module lang="scss"></style>
