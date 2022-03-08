<template>
  <div class="section_spacer">
    <PageHeader class="text-center">{{ memberType }}</PageHeader>
    <v-row>
      <v-col
        cols="12"
        lg="4"
        md="6"
        sm="12"
        v-for="(member, i) in members"
        :key="i"
      >
        <TeamMemberCard :member="member" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageHeader from '../UI/Header/PageHeader';
import TeamMemberCard from '../Team/TeamMemberCard.vue';
export default {
  components: {
    PageHeader,
    TeamMemberCard,
  },
  props: {
    members: Array,
    memberType: String,
  },
};
</script>

<style scoped>
.section_spacer {
  margin-bottom: 4rem;
}
</style>
