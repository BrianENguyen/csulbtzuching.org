<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="300"
        />
        <h1 class="intro_title">Welcome to CSULB Tzu Ching!</h1>
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
export default {
  name: 'Introduction',
};
</script>

<style scoped>
.intro_title {
  font-size: 3rem;
  color: #2f86a6;
}
.intro_description {
  font-size: 1.2rem;
}
</style>
