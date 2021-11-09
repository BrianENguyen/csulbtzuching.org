<template>
  <v-timeline dense>
    <div v-for="(event, i) in events" :key="i">
      <EventTimelineItem :event="event" />
    </div>
  </v-timeline>
</template>

<script>
import EventTimelineItem from './EventTimelineItem.vue';

export default {
  components: {
    EventTimelineItem,
  },
  data: () => ({
    events: [
      {
        name: 'Medical Outreach',
        date: 'Saturday, 11/13/21',
        time: '9:10 AM',
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
