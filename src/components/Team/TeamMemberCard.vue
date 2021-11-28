<template>
  <v-card outlined elevation="5">
    <div class="card_content">
      <TeamMemberImage :src="member.src" />
      <h3 class="member_name">{{ member.name }}</h3>
      <p>{{ member.role }}</p>
      <p class="member_description">{{ member.description }}</p>
      <TeamMemberLinks :member="member" />
    </div>
  </v-card>
</template>

<script>
import TeamMemberImage from './TeamMemberImage.vue';
import TeamMemberLinks from './TeamMemberLinks.vue';

export default {
  props: {
    member: Object,
  },
  components: {
    TeamMemberImage,
    TeamMemberLinks,
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
