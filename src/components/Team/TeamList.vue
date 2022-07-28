<template>
  <div class="section_spacer">
    <PageHeader class="text-center">{{ memberType }}</PageHeader>
    <p class="section_description" v-if="memberType.toLowerCase() === 'alumni'">
      In Tzu Chi, the term "alumni" refers to any members who graduated from
      college but still participate in Tzu Chi activities
    </p>
    <AnimateFadeIn>
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
    </AnimateFadeIn>
  </div>
</template>

<script>
import PageHeader from '../UI/Header/PageHeader';
import TeamMemberCard from '../Team/TeamMemberCard';
import AnimateFadeIn from '../Animations/AnimateFadeIn';
export default {
  components: {
    PageHeader,
    TeamMemberCard,
    AnimateFadeIn,
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

.section_description {
  font-size: 1.4rem;
}
</style>
