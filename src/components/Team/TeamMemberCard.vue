<template>
  <v-card outlined elevation="5" data-aos="fade-up" data-aos-delay="400">
    <div class="card_content">
      <!-- Team member image -->
      <TeamMemberImage :src="member.src" />
      <!-- Team member name -->
      <h3 class="member_name">{{ member.name }}</h3>
      <!-- Team member role (i.e. president, treasurer, etc) -->
      <p>{{ member.role }}</p>
      <!-- Team member's role description -->
      <p class="member_description">{{ member.description }}</p>
      <!-- External links to team member's socials / websites, if any -->
      <div v-if="member.links">
        <TeamMemberLinks :links="member.links" />
      </div>
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
