<template>
  <v-container id="recent_events_section">
    <PageHeader>Upcoming Events</PageHeader>
    <PageSubheader>{{ time }}</PageSubheader>
    <div v-if="events.length">
      <v-row>
        <v-col v-for="(event, i) in events" :key="i" cols="12" md="6" lg="4">
          <UpcomingEventCard :event="event" />
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <p>
        There are no events scheduled at this time. Please check back soon, or
        feel free to email us at
        <a href="mailto:tcca.csulb@gmail.com">tcca.csulb@gmail.com</a> to see if
        we have any upcoming plans!
      </p>
    </div>
    <center>
      <router-link to="/events" class="events_btn_hover">
        <v-btn x-large class="events_btn">View More Events</v-btn>
      </router-link>
    </center>
  </v-container>
</template>

<script>
import UpcomingEventCard from './UpcomingEventCard';
import PageHeader from '../../UI/Header/PageHeader';
import PageSubheader from '../../UI/Header/PageSubheader';

const date = new Date();
const month = date.toLocaleString('default', { month: 'long' });
const year = date.getFullYear();
const time = month + ' ' + year;
export default {
  components: {
    UpcomingEventCard,
    PageHeader,
    PageSubheader,
  },
  data: () => ({
    time: time,
    events: [
      {
        name: 'Food Distribution',
        date: 'Saturday, 3/26/22',
        time: '8:00 AM - 10:00 AM',
        location: '2880 E Gage Avenue, Huntington Park, CA 90255',
        description: `Help distribute food for families!`,
        img: 'https://res.cloudinary.com/buraiyen/image/upload/v1638307033/CSULB_TC_Website/fooddistribution.jpg',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLScVzPaRfwyA8wCQzPfM8axYX3qeMtzngX0Qy4wWwp3Rf-MJQA/viewform',
      },
      {
        name: 'General Meeting',
        date: 'Tuesday, 3/22/22',
        time: '6:30 PM - 7:30 PM',
        location: 'CSULB, HHS1 Room 205',
        description: ``,
        link: 'TBA',
      },
      {
        name: 'Food Distribution',
        date: 'Saturday, 3/19/22',
        time: '8:00 AM - 10:00 AM',
        location: '1355 Broad Avenue, Wilmington, CA 90744',
        description: `Help distribute food for families!`,
        img: 'https://res.cloudinary.com/buraiyen/image/upload/v1638307033/CSULB_TC_Website/fooddistribution.jpg',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLScVzPaRfwyA8wCQzPfM8axYX3qeMtzngX0Qy4wWwp3Rf-MJQA/viewform',
      },
    ],
  }),
};
</script>

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
