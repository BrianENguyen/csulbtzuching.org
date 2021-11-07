<template>
  <v-container class="text-left">
    <h1>Recent Events</h1>
    <h2>{{ month }}</h2>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    month: 'November 2021',
    events: [
      {
        id: 1,
        name: 'Medical Outreach',
        date: 'Saturday 11/6/21',
        description:
          'Help medical professionals provide services to those in need',
      },
      {
        id: 2,
        name: "Weili's Warm Gathering",
        date: 'Wednesday 11/3/21',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, officia atque a unde aspernatur officiis facilis ipsam vero quisquam neque. Sapiente, ipsa nostrum! Inventore, assumenda! Nulla eligendi eum debitis asperiores?',
      },
    ],
  }),
};
</script>

<style></style>
