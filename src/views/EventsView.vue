<template>
  <CardWrapper>
    <PageTitle>Events</PageTitle>
    <v-checkbox
      v-model="isCondensed"
      :label="`Condensed view: ${isCondensed.toString()}`"
    ></v-checkbox>
    <div v-if="isCondensed">
      <EventTimelineCondensed month="December 2021" :events="december" />
      <EventTimelineCondensed month="November 2021" :events="november" />
    </div>
    <div v-else>
      <EventTimeline month="December 2021" :events="december" />
      <EventTimeline month="November 2021" :events="november" />
    </div>
  </CardWrapper>
</template>

<script>
import EventTimeline from '../components/Events/EventTimeline';
import EventTimelineCondensed from '../components/Events/Condensed/EventTimelineCondensed';
import CardWrapper from '../components/UI/CardWrapper';
import PageTitle from '../components/UI/Header/PageTitle';

export default {
  components: {
    EventTimeline,
    EventTimelineCondensed,
    CardWrapper,
    PageTitle,
  },
  data: () => ({
    isCondensed: false,
    december: [
      {
        name: 'Food Distribution',
        date: 'Saturday, 12/18/21',
        time: '7:30 AM - 11:00 AM',
        location: '6720 Miles Ave, Huntington Park, CA 90255',
        description: 'Help distribute food for families!',
        img: 'https://res.cloudinary.com/buraiyen/image/upload/v1638307033/CSULB_TC_Website/fooddistribution.jpg',
        link: 'TBA',
      },
      {
        name: 'Food Distribution',
        date: 'Saturday, 12/11/21',
        time: '8:30 AM - 10:30 AM',
        location:
          'Tzu Chi Health Center - 1355 Broad Ave, Wilmington, CA 90744',
        description: 'Help distribute food for families!',
        img: 'https://res.cloudinary.com/buraiyen/image/upload/v1638307033/CSULB_TC_Website/fooddistribution.jpg',
        link: '',
      },
      {
        name: 'December General Meeting',
        date: 'Thursday, 12/9/21',
        time: '8:00 PM - 9:00 PM',
        location: 'Zoom',
        description:
          "Join us this Thursday at our last meeting of the Fall 2021 semester! Come to hang and relax with CSULB Tzu Ching, December 9th at 8 pm! Register for December's General Meeting for the zoom meeting information. Happy Holidays!",
        link: '',
      },
      {
        name: 'Online Dharma Study',
        date: 'Sunday, 12/05/21',
        time: '5:00 PM - 6:00 PM',
        location: 'Zoom',
        description: '',
        link: '',
      },
    ],
    november: [
      {
        name: 'Bowling Social',
        date: 'Sunday, 11/21/21',
        time: '12:00 PM - 2:00PM',
        location: '',
        description: '',
        link: '',
      },
      {
        name: 'Medical Outreach',
        date: 'Saturday, 11/13/21',
        time: '9:00 AM',
        location:
          'Tzu Chi Health Center - 1355 Broad Ave, Wilmington, CA 90744',
        description:
          'Assist medical professionals in providing medical services to those in need!',
        img: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_678/v1636487294/CSULB_TC_Website/DSC_0118_c3fvq6.jpg',
        link: '',
      },
    ],
  }),
};
</script>
