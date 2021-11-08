<template>
  <v-card outlined elevation="5">
    <h2>{{ officer.name }}</h2>
  </v-card>
</template>

<script>
export default {
  props: {
    officer: Object,
  },
};
</script>

<style></style>
