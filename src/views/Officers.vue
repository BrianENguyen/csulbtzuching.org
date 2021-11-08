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
        name: 'Brian',
        role: 'Webmaster / Advisor',
        description:
          'Maintains CSULB TC website and advises current officer board',
      },
    ],
  }),
};
</script>
