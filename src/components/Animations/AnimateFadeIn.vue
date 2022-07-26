<template>
  <v-lazy
    :options="{
      threshold: 0.9,
    }"
    transition="fade-transition"
  >
    <slot></slot>
  </v-lazy>
</template>

<script>
export default {};
</script>

<style></style>
