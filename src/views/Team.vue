<template>
  <div>
    <v-container>
      <h1 id="team_header">2021-2022 Team</h1>
      <v-row>
        <v-col
          cols="6"
          lg="4"
          md="6"
          sm="12"
          v-for="(officer, i) in officers"
          :key="i"
        >
          <TeamMemberCard :officer="officer" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TeamMemberCard from '../components/TeamMemberCard';
export default {
  components: {
    TeamMemberCard,
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
    ],
    advisors: [
      {
        name: 'Brian N.',
        role: 'Webmaster / Advisor',
        description:
          'Maintains CSULB TC website and advises current officer board',
        email: '',
        linkedin: 'https://www.linkedin.com/in/brian-edison-nguyen/',
      },
    ],
  }),
};
</script>
