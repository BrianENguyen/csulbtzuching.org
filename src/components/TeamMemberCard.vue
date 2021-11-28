<template>
  <v-card
    outlined
    elevation="5"
    data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="300"
    data-aos-offset="0"
  >
    <div class="card_content">
      <h2 class="member_name">{{ member.name }}</h2>
      <p>{{ member.role }}</p>
      <p class="member_description">{{ member.description }}</p>
      <a href=""><i class="fas fa-envelope fa-2x mr-2"></i></a>
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
.member_name {
  color: #34be82;
}
.member_description {
  font-weight: 300;
}
.card_content {
  margin: 5px 10px;
}
</style>
