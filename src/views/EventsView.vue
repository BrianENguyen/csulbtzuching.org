<template>
  <div class="events">
    <Jumbotron :jumboData="jumboData" />
    <CardWrapper>
      <!-- Checkbox to switch between (un)condensed timeline views.
            The initial state of 'isCondensed' is set to false, so 
            the regular timeline will display
       -->
      <v-checkbox
        v-model="isCondensed"
        :label="`Condensed view: ${isCondensed ? 'On' : 'Off'}`"
      ></v-checkbox>
      <!-- Uncondensed timeline -->
      <div v-if="!isCondensed">
        <EventTimeline month="May 2022" :events="may" />
        <EventTimeline month="April 2022" :events="april" />
        <EventTimeline month="March 2022" :events="march" />
        <EventTimeline month="December 2021" :events="december" />
        <EventTimeline month="November 2021" :events="november" />
      </div>
      <!-- Condensed timeline -->
      <div v-else>
        <EventTimelineCondensed month="April 2022" :events="april" />
        <EventTimelineCondensed month="March 2022" :events="march" />
        <EventTimelineCondensed month="December 2021" :events="december" />
        <EventTimelineCondensed month="November 2021" :events="november" />
      </div>
    </CardWrapper>
  </div>
</template>

<script>
import Jumbotron from '../components/UI/Jumbotron';
import EventTimeline from '../components/Events/Regular/EventTimeline';
import EventTimelineCondensed from '../components/Events/Condensed/EventTimelineCondensed';
import CardWrapper from '../components/UI/CardWrapper';
import {
  may,
  april,
  march,
  december,
  november,
} from '../components/Helpers/EventData';

const jumboImage =
  'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1915/v1648148277/CSULB_TC_Website/Jumbotron/BEN_distribution_bwl3cq.webp';
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
    may: may,
    april: april,
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
