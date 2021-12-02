<template>
  <CardWrapper>
    <PageTitle>Donate</PageTitle>
    <p class="my-3">
      Donations are greatly appreciated because they help keep the website
      online! If you want to support our organization, then consider donating!
    </p>
    <DonateButton :info="csulbtc" />
    <p class="my-3">
      You can also donate to our mother organization, the Tzu Chi Foundation.
      Your contribution will help Tzu Chi with their efforts in providing
      relief, like food, clothing, and medical care!
    </p>
    <DonateButton :info="tzuchi" />
  </CardWrapper>
</template>

<script>
import CardWrapper from '../components/UI/CardWrapper';
import PageTitle from '../components/UI/Header/PageTitle';
import DonateButton from '../components/UI/DonateButton';

export default {
  components: {
    CardWrapper,
    PageTitle,
    DonateButton,
  },
  data: () => ({
    csulbtc: {
      logo: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_435/v1638399702/CSULB_TC_Website/logo.png',
      link: 'https://ko-fi.com/brianenguyen',
      color: 'light-green',
    },
    tzuchi: {
      logo: 'https://res.cloudinary.com/buraiyen/image/upload/v1638403135/CSULB_TC_Website/tclogo.png',
      link: 'https://donate.tzuchi.us/cause/gift/',
      color: 'blue lighten-3',
    },
  }),
};
</script>
