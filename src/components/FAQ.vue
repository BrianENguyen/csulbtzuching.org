<template>
  <div>
    <h2 class="about_subheader">Frequently Asked Questions</h2>

    <v-expansion-panels>
      <v-expansion-panel
        v-for="(questionAnswer, i) in questionAnswers"
        :key="i"
      >
        <v-expansion-panel-header
          ><h4>{{ questionAnswer.question }}</h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ questionAnswer.answer }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data: () => ({
    questionAnswers: [
      {
        question: '1. Do I have to pay dues to become a member?',
        answer:
          'No! You do not have to pay a single penny to be part of our organization',
      },
    ],
  }),
};
</script>
