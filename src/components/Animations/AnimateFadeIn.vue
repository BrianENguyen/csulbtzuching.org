<template>
  <v-lazy
    :options="{
      threshold: 0.9,
    }"
    :min-height="minHeight"
    transition-group="fade-transition"
  >
    <slot></slot>
  </v-lazy>
</template>

<script>
export default {
  props: {
    minHeight: String,
  },
};
</script>

<style></style>
