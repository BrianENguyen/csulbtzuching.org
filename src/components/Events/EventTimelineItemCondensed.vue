<template>
  <v-timeline-item>
    <h1>{{ event.name }}</h1>
  </v-timeline-item>
</template>

<script>
export default {
  props: {
    event: Object,
  },
};
</script>

<style></style>
