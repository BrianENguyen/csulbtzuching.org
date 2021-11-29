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
        name: 'December General Meeting',
        date: 'Date and time TBA',
        time: '',
        location: 'Zoom',
        description: '',
      },
    ],
    november: [
      {
        name: 'Bowling Social',
        date: 'Sunday, 11/21/21',
        time: '12:00 PM - 2:00PM',
        location: '1355 Broad Ave, Wilmington, CA 90744',
        description: '',
      },
      {
        name: 'Medical Outreach',
        date: 'Saturday, 11/13/21',
        time: '9:00 AM',
        location: '1355 Broad Ave, Wilmington, CA 90744',
        description:
          'Assist medical professionals in providing medical services to those in need!',
        img: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_678/v1636487294/CSULB_TC_Website/DSC_0118_c3fvq6.jpg',
        link: '',
      },
    ],
  }),
};
</script>
