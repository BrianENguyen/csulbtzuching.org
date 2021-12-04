<template>
  <div>
    <PageHeader>Frequently Asked Questions</PageHeader>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h4 class="question">1. Do I have to pay dues to become a member?</h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p>
            No! You do not have to pay a single penny to be part of our
            organization
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h4 class="question">2. Do I have to be Buddhist or Asian?</h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          No! The Tzu Chi Foundation is an international organization that has
          volunteers from many different backgrounds, races, religions, etc.
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h4 class="question">3. Do I have to be vegetarian / vegan?</h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p>
            We promote environmental protection by having a vegan / vegetarian
            diet. This diet eliminates environmental pollution and shows
            compassion towards animals; however, you do
            <strong>NOT</strong> have to be vegetarian / vegan to be part of our
            organization
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h4 class="question">
            4. What's the difference between "Tzu Chi" and "Tzu Ching"?
          </h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p>
            <em>Tzu Chi</em> is our main international-relief organization. In
            Chinese, it means "Compassionate Relief"
          </p>
          <p>
            <em>Tzu Ching</em> is the collegiate-level of Tzu Chi. In Chinese,
            it means "Compassionate Youth." We are the CSULB collegiate branch
            of Tzu Chi, hence we are called <em>CSULB Tzu Ching</em>. We are
            also sometimes called the
            <em>Tzu Chi Collegiate Association of CSULB</em>. Hopefully those
            terms aren't confusing!!
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h4 class="question">
            5. What is the uniform that you wear? How can I get one?
          </h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p>
            Tzu Chi members wear a blue Tzu Chi shirt, white pants, and white
            socks for their uniform. It signifies blue skies and white clouds.
            By wearing our uniforms, we are building a presence for those who
            are receiving our help
          </p>
          <p>
            To obtain a uniform, you must reach 20 hours of volunteering across
            <u>4 unique events</u>. This includes food distributions, medical
            outreaches, etc. We also have virtual volunteering for you at
            beanbeanbean.com and freerice.com, as well as sharing us your veggie
            foods. General meetings, book club gatherings, and Dharma studies
            also count towards your hours. Social events
            <strong> DO NOT</strong> count. Hours carry over between semesters /
            years
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h4 class="question">6. My question wasn't answered in here!</h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p>
            Feel free to send us an email at
            <a href="mailto:tcca.csulb@gmail.com" target="_blank"
              >tcca.csulb@gmail.com</a
            >! You can also join our
            <a href="https://discord.gg/fmf3JtTNCc" target="_blank"
              >Discord server</a
            >
            to ask us any questions, or to socialize with us and other general
            members!
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import PageHeader from '../components/UI/Header/PageHeader';

export default {
  components: {
    PageHeader,
  },
};
</script>

<style scoped>
.question {
  color: #3d3d3d;
}
.answer {
  margin: 0px 20px;
}
</style>
