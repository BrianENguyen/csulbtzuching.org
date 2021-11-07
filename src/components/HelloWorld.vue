<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <h1 class="display-2 font-weight-bold mb-3">
        Welcome to CSULB Tzu Ching
      </h1>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
};
</script>
