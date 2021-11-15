<template>
  <v-container id="recent_events_section">
    <h1 id="recent_events_header">Upcoming Events</h1>
    <h2 class="recent_events_month">{{ month }}</h2>
    <div v-for="event in events" :key="event.id" class="recent_event">
      <h3 class="recent_event_name">{{ event.name }}</h3>
      <h4 class="recent_event_date">{{ event.date }}</h4>
      <p>{{ event.description }}</p>
      <v-btn>Sign Up</v-btn>
    </div>
    <hr />
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
.recent_event {
  padding: 1rem 6rem 1rem 1rem;
  margin-bottom: 1rem;
  border-left: 2px solid #2f86a6;
}
.recent_event_name {
  color: #34be82;
}
.recent_event_date {
  color: #34be82;
}
</style>
