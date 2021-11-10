<template>
  <div>
    <v-container
      ><h1 id="events_header">Events</h1>
      <EventTimeline month="November 2021" :events="november" />
    </v-container>
  </div>
</template>

<script>
import EventTimeline from '../components/Events/EventTimeline';

export default {
  components: {
    EventTimeline,
  },
  data: () => ({
    november: [
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

<style scoped>
#events_header {
  text-align: center;
  font-size: 3rem;
  color: #2f86a6;
}
</style>
