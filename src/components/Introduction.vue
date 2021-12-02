<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.png')"
          :lazy-src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="300"
          data-aos="zoom-in-down"
          data-aos-duration="500"
        />
        <PageTitle>Welcome to CSULB Tzu Ching!</PageTitle>
        <p class="intro_description">
          CSULB Tzu Ching (also known as the Tzu Chi Collegiate Association of
          CSULB) are a volunteering organization of diverse students that
          focuses on medicine, education, charity, and humanistic culture. We
          serve as the CSULB collegiate chapter for our mother organization: the
          Tzu Chi Foundation.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageTitle from './UI/Header/PageTitle.vue';
export default {
  name: 'Introduction',
  components: {
    PageTitle,
  },
};
</script>

<style scoped>
.intro_description {
  font-size: 1.2rem;
}
</style>
