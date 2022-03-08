<template>
  <div class="team">
    <Jumbotron :jumboData="jumboData" />
    <CardWrapper>
      <PageTitle>2021-2022 Team</PageTitle>
      <TeamList :members="officers" memberType="Officers" />
      <TeamList :members="alumnis" memberType="Alumni" />
      <TeamList :members="formerMembers" memberType="Former Members" />
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
  formerMembers,
} from '../components/Helpers/TeamData';

const jumboImage =
  'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1915/v1636919257/CSULB_TC_Website/BEN_1689_01_hobk1j.jpg';
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
    formerMembers: formerMembers,
    jumboData: {
      src: jumboImage,
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
