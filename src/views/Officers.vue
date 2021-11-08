<template>
  <div>
    <v-container>
      <h1>Officers</h1>
      <v-row>
        <v-col cols="6">
          <OfficerCard />
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
};
</script>
