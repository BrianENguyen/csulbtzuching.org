<template>
  <div id="about">
    <Jumbotron :jumboData="jumboData" />

    <CardWrapper>
      <PageTitle>About Us</PageTitle>
      <PageHeader>The Tzu Chi Foundation</PageHeader>
      <p>
        The Tzu Chi Foundation (<em>tzu</em> - "compassionate", <em>chi</em> -
        "relief") is a global relief organization whose main missions are
        charity, education, medicine, and humanistic culture. The organization
        was founded in Taiwan by Dharma Master Cheng in 1966, and it began as a
        group of 30 housewives who saved money everyday, which would then be
        donated to those in need. This incentivized others to follow their acts
        of compassion. The organization expanded throughout the years and became
        a major organization to provide relief services. The Tzu Chi Foundation
        today consists of over 10 million members worldwide in over 50
        countries. In 2020, Tzu Chi has provided aid to 125 countries, donated
        over 2 million medical masks, provided food to over 70 thousand
        households, and benefitted 17,335 students from their tutoring program
      </p>
      <p>
        For more information about the Tzu Chi Foundation,
        <a href="https://tzuchi.us/" target="_blank"
          >click here to visit Tzu Chi USA's website</a
        >
      </p>
      <PageHeader>CSULB Tzu Ching</PageHeader>
      <p>
        The Tzu Chi Foundation consists of collegiate chapters throughout the
        world. CSULB Tzu Ching (<em>tzu</em> - "compassionate", <em>ching</em> -
        "youth") was founded in 2014 and consists of many students from diverse
        backgrounds, majors, ethnicities, and more. Our general meetings are
        once a month and we provide diverse range of events for members to
        attend, such as food-packing events, medical outreaches, senior center
        visits, and socials. Go Beach! Go Tzu Ching!
      </p>
      <FAQ />
    </CardWrapper>
  </div>
</template>

<script>
import CardWrapper from '../components/UI/CardWrapper';
import FAQ from '../components/FAQ';
import PageTitle from '../components/UI/Header/PageTitle';
import PageHeader from '../components/UI/Header/PageHeader';
import Jumbotron from '../components/UI/Jumbotron';

const jumboImage =
  'https://res.cloudinary.com/buraiyen/image/upload/b_black,o_70/v1639515139/BEN_Website/recent_projects/lbtc_group.jpg';
const jumboTitle = 'About Us';
const jumboDescription =
  'Get to know more about our organization and our efforts!';

export default {
  components: {
    CardWrapper,
    FAQ,
    PageTitle,
    PageHeader,
    Jumbotron,
  },
  data: () => ({
    jumboData: {
      src: jumboImage,
      title: jumboTitle,
      description: jumboDescription,
    },
  }),
};
</script>

<style></style>
