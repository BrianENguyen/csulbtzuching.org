<template>
  <div>
    <v-container>
      <h1>Officers</h1>
      <v-row>
        <v-col cols="6" v-for="(officer, i) in officers" :key="i">
          <OfficerCard :officer="officer" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import OfficerCard from '../components/OfficerCard';
export default {
  components: {
    OfficerCard,
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
