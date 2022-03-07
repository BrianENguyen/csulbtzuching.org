<template>
  <div class="events">
    <Jumbotron :jumboData="jumboData" />
    <CardWrapper>
      <v-checkbox
        v-model="isCondensed"
        :label="`Condensed view: ${isCondensed ? 'On' : 'Off'}`"
      ></v-checkbox>
      <div v-if="isCondensed">
        <EventTimelineCondensed month="March 2022" :events="march" />
        <EventTimelineCondensed month="December 2021" :events="december" />
        <EventTimelineCondensed month="November 2021" :events="november" />
      </div>
      <div v-else>
        <EventTimeline month="March 2022" :events="march" />
        <EventTimeline month="December 2021" :events="december" />
        <EventTimeline month="November 2021" :events="november" />
      </div>
    </CardWrapper>
  </div>
</template>

<script>
import Jumbotron from '../components/UI/Jumbotron';
import EventTimeline from '../components/Events/Regular/EventTimeline';
import EventTimelineCondensed from '../components/Events/Condensed/EventTimelineCondensed';
import CardWrapper from '../components/UI/CardWrapper';
import { december, march, november } from '../components/Helpers/EventData';

const jumboImage =
  'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1915/v1636247406/CSULB_TC_Website/DSC_0400_nmkrtt.jpg';
const jumboTitle = 'Events';
const jumboDescription = 'View our current / past events!';

export default {
  components: {
    EventTimeline,
    EventTimelineCondensed,
    CardWrapper,
    Jumbotron,
  },
  data: () => ({
    isCondensed: false,
    march: march,
    december: december,
    november: november,
    jumboData: {
      src: jumboImage,
      title: jumboTitle,
      description: jumboDescription,
    },
  }),
};
</script>
