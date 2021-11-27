<template>
  <v-card outlined elevation="5">
    <div class="card_content">
      <TeamMemberImage :src="member.src" />
      <h3 class="member_name">{{ member.name }}</h3>
      <p>{{ member.role }}</p>
      <p class="member_description">{{ member.description }}</p>
      <a href=""><i class="fas fa-envelope fa-2x mr-2"></i></a>
      <a :href="member.linkedin"> <i class="fab fa-linkedin fa-2x mx-2"></i></a>
    </div>
  </v-card>
</template>

<script>
import TeamMemberImage from './TeamMemberImage.vue';
export default {
  props: {
    member: Object,
  },
  components: {
    TeamMemberImage,
  },
};
</script>

<style>
.member_name {
  color: #34be82;
  font-size: 1.5rem;
}
.member_description {
  font-weight: 300;
}
.card_content {
  margin: 5px 10px;
}
</style>
