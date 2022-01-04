<template>
  <CardWrapper>
    <PageTitle>2021-2022 Team</PageTitle>
    <div class="section_spacer">
      <PageHeader class="text-center">Officers</PageHeader>
      <v-row>
        <v-col
          cols="12"
          lg="4"
          md="6"
          sm="12"
          v-for="(officer, i) in officers"
          :key="i"
        >
          <TeamMemberCard :member="officer" />
        </v-col>
      </v-row>
    </div>
    <div>
      <PageHeader class="text-center">Alumni</PageHeader>
      <v-row>
        <v-col
          cols="12"
          lg="4"
          md="6"
          sm="12"
          v-for="(alumni, i) in alumnis"
          :key="i"
        >
          <TeamMemberCard :member="alumni" />
        </v-col>
      </v-row>
    </div>
  </CardWrapper>
</template>

<script>
import TeamMemberCard from '../components/Team/TeamMemberCard';
import CardWrapper from '../components/UI/CardWrapper';
import PageTitle from '../components/UI/Header/PageTitle';
import PageHeader from '../components/UI/Header/PageHeader';
import { officers, alumnis } from '../components/Helpers/TeamData';

export default {
  components: {
    TeamMemberCard,
    CardWrapper,
    PageTitle,
    PageHeader,
  },
  data: () => ({
    officers: officers,
    alumnis: alumnis,
  }),
};
</script>

<style scoped>
.team_subheader {
  text-align: center;
  font-size: 2.5rem;
  color: #3babd4;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.section_spacer {
  margin-bottom: 4rem;
}
</style>
