<template>
  <v-card outlined elevation="5">
    <div class="card_content">
      <h2>{{ officer.name }}</h2>
      <p>{{ officer.role }}</p>
      <p>{{ officer.description }}</p>
      <i class="fas fa-envelope fa-2x mx-2"></i>
      <a :href="officer.linkedin">
        <i class="fab fa-linkedin fa-2x mx-2"></i
      ></a>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    officer: Object,
  },
};
</script>

<style>
#team_header {
  text-align: center;
  font-size: 3rem;
  color: #2f86a6;
}
.card_content {
  margin: 5px 10px;
}
</style>
