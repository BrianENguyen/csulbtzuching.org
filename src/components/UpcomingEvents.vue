<template>
  <v-container id="recent_events_section">
    <PageHeader>Upcoming Events</PageHeader>
    <PageSubheader>{{ month }}</PageSubheader>
    <v-row>
      <v-col v-for="(event, i) in events" :key="i" cols="12" md="6" lg="4">
        <UpcomingEventCard :event="event" />
      </v-col>
    </v-row>
    <center>
      <router-link to="/events" class="events_btn_hover">
        <v-btn x-large class="events_btn">View More Events</v-btn>
      </router-link>
    </center>
    <hr />
  </v-container>
</template>

<script>
import UpcomingEventCard from './UpcomingEventCard.vue';
import PageHeader from './UI/Header/PageHeader';
import PageSubheader from './UI/Header/PageSubheader';

export default {
  components: {
    UpcomingEventCard,
    PageHeader,
    PageSubheader,
  },
  data: () => ({
    month: 'December 2021',
    events: [
      {
        name: 'December General Meeting',
        date: '',
        time: '',
        location: 'Zoom',
        description: '',
        link: '',
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
.recent_events_month {
  color: #3babd4;
}
.events_btn {
  margin: 3rem 0px;
}
.events_btn_hover:hover {
  text-decoration: none;
}
</style>
