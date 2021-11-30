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
import TeamMemberCard from '../components/TeamMemberCard';
import CardWrapper from '../components/UI/CardWrapper';
import PageTitle from '../components/UI/Header/PageTitle';
import PageHeader from '../components/UI/Header/PageHeader';

export default {
  components: {
    TeamMemberCard,
    CardWrapper,
    PageTitle,
    PageHeader,
  },
  data: () => ({
    officers: [
      {
        name: 'Samanta C.',
        role: 'President',
        description:
          'Plans monthly events, leads general meetings, delegates tasks to other officers',
        email: '',
        linkedin: '',
      },
      {
        name: 'Vivienne A.',
        role: 'Executive Vice President',
        description:
          'Helps lead general meetings with president, finds a common meeting time with officers',
        email: '',
        linkedin: '',
      },
      {
        name: 'Thu N.',
        role: 'VP of Administration',
        description:
          "Takes notes during officer meetings, tracks members' volunteering hours",
        email: '',
        linkedin: '',
      },
      {
        name: 'Jose A.',
        role: 'Treasurer',
        description: 'Handles all financial and budgeting of the organization',
        email: '',
        linkedin: '',
      },
      {
        name: 'Mahya J.',
        role: 'VP of Communications',
        description:
          'Sends monthly emails that advertise general meetings and volunteering events',
        email: '',
        linkedin: '',
      },
    ],
    alumnis: [
      {
        name: 'Brian N.',
        role: 'Webmaster / Photographer / Advisor',
        description:
          'Maintains CSULB TC website and advises current officer board',
        email: '',
        linkedin: 'https://www.linkedin.com/in/brian-edison-nguyen/',
      },
      {
        name: 'Lily K.',
        role: 'Advisor',
        description: '',
        email: '',
        linkedin: '',
      },
      {
        name: 'Weili K.',
        role: 'Advisor',
        description: '',
        email: '',
        linkedin: '',
      },
    ],
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
