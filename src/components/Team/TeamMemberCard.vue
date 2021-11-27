<template>
  <v-card outlined elevation="5">
    <div class="card_content">
      <TeamMemberImage :src="member.src" />
      <h3 class="member_name">{{ member.name }}</h3>
      <p>{{ member.role }}</p>
      <p class="member_description">{{ member.description }}</p>
      <a v-if="member.email" :href="member.email"
        ><i class="fas fa-envelope fa-2x mr-2 member_card_icon"></i
      ></a>
      <a v-if="member.facebook" :href="member.facebook">
        <i class="fab fa-facebook fa-2x mx-2 member_card_icon"></i
      ></a>
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
.member_card_icon {
  color: rgb(116, 116, 116);
  transition: 0.5s;
}
.member_card_icon:hover {
  color: rgb(24, 24, 24);
  transition: 0.5s;
}
</style>
