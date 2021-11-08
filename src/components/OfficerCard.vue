<template>
  <v-card outlined elevation="5">
    <h2>{{ officer.name }}</h2>
    <p>{{ officer.role }}</p>
    <p>{{ officer.description }}</p>
    <i class="fas fa-envelope fa-2x mx-2"></i>
    <a :href="officer.linkedin"> <i class="fab fa-linkedin fa-2x mx-2"></i></a>
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
