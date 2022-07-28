<template>
  <div class="team">
    <Jumbotron :jumboData="jumboData" />
    <CardWrapper>
      <PageTitle>2022-2023 Team</PageTitle>
      <TeamList :members="officers" memberType="Officers" />
      <TeamList :members="alumnis" memberType="Alumni" />
      <TeamList :members="formerOfficers" memberType="Former Officers" />
    </CardWrapper>
  </div>
</template>

<script>
import Jumbotron from '../components/UI/Jumbotron';
import CardWrapper from '../components/UI/CardWrapper';
import PageTitle from '../components/UI/Header/PageTitle';
import TeamList from '../components/Team/TeamList';

import {
  officers,
  alumnis,
  formerOfficers,
} from '../components/Helpers/TeamData';

const jumboImage =
  'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1200/v1648148277/CSULB_TC_Website/Jumbotron/BEN_WoW-tabling_vszybk.webp';
const jumboImageMobile =
  'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1648148277/CSULB_TC_Website/Jumbotron/BEN_WoW-tabling_vszybk.webp';
const jumboTitle = 'Our Board Members';
const jumboDescription = 'Meet our current officers and alumni!';

export default {
  components: {
    CardWrapper,
    PageTitle,
    Jumbotron,
    TeamList,
  },
  data: () => ({
    officers: officers,
    alumnis: alumnis,
    formerOfficers: formerOfficers,
    jumboData: {
      src: jumboImage,
      srcMobile: jumboImageMobile,
      title: jumboTitle,
      description: jumboDescription,
    },
  }),
};
</script>

<style scoped>
.team_subheader {
  text-align: center;
  font-size: 2.5rem;
  color: #3babd4;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
