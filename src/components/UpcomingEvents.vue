<template>
  <v-container id="recent_events_section">
    <h1 id="recent_events_header">Upcoming Events</h1>
    <h2 class="recent_events_month">{{ month }}</h2>
    <v-row>
      <v-col v-for="(event, i) in events" :key="i" cols="12" md="6">
        <UpcomingEventCard :event="event" />
      </v-col>
    </v-row>
    <hr />
  </v-container>
</template>

<script>
import UpcomingEventCard from './UpcomingEventCard.vue';
export default {
  components: {
    UpcomingEventCard,
  },
  data: () => ({
    month: 'November 2021',
    events: [
      {
        name: 'Medical Outreach',
        date: 'Saturday, 11/6/21',
        time: '9:00 AM',
        location: '1355 Broad Ave, Wilmington, CA 90744',
        description:
          'Help medical professionals provide services to those in need',
      },
      {
        name: "Weili's Warm Gathering",
        date: 'Wednesday, 11/3/21',
        time: '9:00 AM',
        location: 'Zoom',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, officia atque a unde aspernatur officiis facilis ipsam vero quisquam neque. Sapiente, ipsa nostrum! Inventore, assumenda! Nulla eligendi eum debitis asperiores?',
      },
    ],
  }),
};
</script>

<style></style>

<style scoped>
#recent_events_section {
  width: 100%;
}
#recent_events_header {
  color: #2f86a6;
}
.recent_events_month {
  color: #3babd4;
}
</style>
