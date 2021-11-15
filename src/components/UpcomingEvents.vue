<template>
  <v-container id="recent_events_section">
    <h1 id="recent_events_header">Upcoming Events</h1>
    <h2 class="recent_events_month">{{ month }}</h2>
    <div v-for="event in events" :key="event.id" class="recent_event">
      <UpcomingEventCard :event="event" />
    </div>
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

<style scoped>
#recent_events_section {
  width: 100%;
}
#recent_events_header {
  color: #2f86a6;
}
</style>
