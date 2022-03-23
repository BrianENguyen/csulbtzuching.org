<template>
  <CardWrapper>
    <PageTitle>Donate</PageTitle>
    <p class="my-3">
      Donations are greatly appreciated because they help keep the website
      online! If you want to support our organization, then please consider
      donating! The button below will redirect you to our web developer's Venmo
      page where you can make your donation. Alternatively, you could look up
      the username @Buraiyen on Venmo.
    </p>
    <DonateButton :info="csulbtc" />
    <p class="my-3">
      You can also donate to our mother organization, the Tzu Chi Foundation, on
      their website. Your contribution will help Tzu Chi with their efforts in
      providing relief, like food, clothing, and medical care! The button below
      will redirect you to the Tzu Chi Foundation's donation page. From there,
      you can choose how much you would like to donate and what your donation
      can be used for, like charity, disaster relief, etc.
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
      text: 'Donate to this website',
      link: 'https://account.venmo.com/u/Buraiyen',
      color: 'light-green',
    },
    tzuchi: {
      text: 'Donate to TC Foundation',
      link: 'https://donate.tzuchi.us/cause/gift/',
      color: 'blue lighten-3',
    },
  }),
};
</script>
