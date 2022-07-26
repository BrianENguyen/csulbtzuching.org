<template>
  <v-lazy
    :options="{
      threshold: 0.9,
    }"
    min-height="200px"
    transition="fade-transition"
  >
    <slot></slot>
  </v-lazy>
</template>

<script>
export default {};
</script>

<style></style>
