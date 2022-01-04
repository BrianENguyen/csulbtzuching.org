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
import { december, november } from '../components/Helpers/EventData';

export default {
  components: {
    EventTimeline,
    EventTimelineCondensed,
    CardWrapper,
    PageTitle,
  },
  data: () => ({
    isCondensed: false,
    december: december,
    november: november,
  }),
};
</script>
