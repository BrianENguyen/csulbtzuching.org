<template>
  <v-timeline dense>
    <v-timeline-item v-for="(event, i) in events" :key="i">
      <v-row>
        <v-col cols="7">
          <EventCard :event="event" />
        </v-col>
        <v-col cols="5">
          <h2 class="text-center">{{ event.date }} @ {{ event.time }}</h2>
        </v-col>
      </v-row>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import EventCard from './EventCard.vue';
export default {
  components: {
    EventCard,
  },
  data: () => ({
    events: [
      {
        name: 'Medical Outreach',
        date: 'Saturday, 11/13/21',
        time: '9:00 AM',
        location: '123 Sesame Street',
        description: 'This is a test',
        img: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_678/v1636487294/CSULB_TC_Website/DSC_0118_c3fvq6.jpg',
        link: '',
      },
      {
        name: 'Medical Outreach',
        date: 'Saturday, 11/13/21',
        time: '9:00 AM',
        location: '123 Sesame Street',
        description: 'This is a test',
        img: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_678/v1636487294/CSULB_TC_Website/DSC_0118_c3fvq6.jpg',
        link: '',
      },
      {
        name: 'Medical Outreach',
        date: 'Saturday, 11/13/21',
        time: '9:00 AM',
        location: '123 Sesame Street',
        description: 'This is a test',
        img: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_678/v1636487294/CSULB_TC_Website/DSC_0118_c3fvq6.jpg',
        link: '',
      },
    ],
  }),
};
</script>
