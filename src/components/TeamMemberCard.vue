<template>
  <v-card outlined elevation="5">
    <div class="card_content">
      <h2>{{ member.name }}</h2>
      <p>{{ member.role }}</p>
      <p>{{ member.description }}</p>
      <i class="fas fa-envelope fa-2x mx-2"></i>
      <a :href="member.linkedin"> <i class="fab fa-linkedin fa-2x mx-2"></i></a>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    member: Object,
  },
};
</script>

<style>
.card_content {
  margin: 5px 10px;
}
</style>
