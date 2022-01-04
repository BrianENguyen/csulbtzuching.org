<template>
  <div class="events">
    <Jumbotron :jumboData="jumboData" />
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
  </div>
</template>

<script>
import Jumbotron from '../components/UI/Jumbotron';
import EventTimeline from '../components/Events/EventTimeline';
import EventTimelineCondensed from '../components/Events/Condensed/EventTimelineCondensed';
import CardWrapper from '../components/UI/CardWrapper';
import PageTitle from '../components/UI/Header/PageTitle';
import { december, november } from '../components/Helpers/EventData';

const jumboImage =
  'https://res.cloudinary.com/buraiyen/image/upload/v1636247406/CSULB_TC_Website/DSC_0400_nmkrtt.jpg';
const jumboTitle = 'Events';
const jumboDescription = 'View our current / past events!';

export default {
  components: {
    EventTimeline,
    EventTimelineCondensed,
    CardWrapper,
    PageTitle,
    Jumbotron,
  },
  data: () => ({
    isCondensed: false,
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
