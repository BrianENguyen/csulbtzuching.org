<template>
  <div>
    <v-container>
      <h1 id="team_header">2021-2022 Team</h1>
      <div class="section_spacer">
        <h2 class="team_subheader">Officers</h2>
        <v-row>
          <v-col
            cols="12"
            lg="4"
            md="6"
            sm="12"
            v-for="(officer, i) in officers"
            :key="i"
          >
            <TeamMemberCard :member="officer" />
          </v-col>
        </v-row>
      </div>
      <div>
        <h2 class="team_subheader">Advisors</h2>
        <v-row>
          <v-col
            cols="12"
            lg="4"
            md="6"
            sm="12"
            v-for="(advisor, i) in advisors"
            :key="i"
          >
            <TeamMemberCard :member="advisor" />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import TeamMemberCard from '../components/Team/TeamMemberCard';
export default {
  components: {
    TeamMemberCard,
  },
  data: () => ({
    officers: [
      {
        name: 'Samanta C.',
        role: 'President',
        description:
          'Plans monthly events, leads general meetings, delegates tasks to other officers',
        links: {},
      },
      {
        name: 'Vivienne A.',
        role: 'Executive Vice President',
        src: 'https://res.cloudinary.com/buraiyen/image/upload/v1638054519/CSULB_TC_Website/team_pic/vivienne.jpg',
        description:
          'Helps lead general meetings with president, finds a common meeting time with officers',
        links: {
          email: 'mailto:Vivienne.An@student.csulb.edu',
          facebook: 'https://www.facebook.com/profile.php?id=100006438256523',
        },
      },
      {
        name: 'Thu N.',
        role: 'VP of Administration',
        description:
          "Takes notes during officer meetings, tracks members' volunteering hours",
      },
      {
        name: 'Jose A.',
        role: 'Treasurer',
        description: 'Handles all financial and budgeting of the organization',
        src: 'https://res.cloudinary.com/buraiyen/image/upload/v1638062335/CSULB_TC_Website/team_pic/jose.jpg',
        links: {
          email: 'mailto:josecarlos.alcantara2016@gmail.com',
          linkedin: 'https://www.linkedin.com/in/jose-alcantara-321378188',
          instagram: 'https://www.instagram.com/jose.alcantara22/',
          art: 'https://www.instagram.com/art.jose22/',
        },
      },
      {
        name: 'Mahya J.',
        role: 'VP of Communications',
        description:
          'Sends monthly emails that advertise general meetings and volunteering events',
        links: {},
      },
    ],
    advisors: [
      {
        name: 'Brian N.',
        role: 'Webmaster / Photographer / Advisor',
        src: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,e_brightness:33,w_1084/v1638060412/CSULB_TC_Website/team_pic/Brian.jpg',
        description:
          'Maintains CSULB TC website and advises current officer board',
        links: {
          email: 'mailto:brian.edison.nguyen@gmail.com',
          linkedin: 'https://www.linkedin.com/in/brian-edison-nguyen/',
          site: 'https://www.brianenguyen.com',
        },
      },
      {
        name: 'Lily K.',
        role: 'Advisor',
        description: '',
      },
      {
        name: 'Weili K.',
        role: 'Advisor',
        description: '',
      },
    ],
  }),
};
</script>

<style scoped>
#team_header {
  text-align: center;
  font-size: 3rem;
  color: #2f86a6;
}
.team_subheader {
  text-align: center;
  font-size: 2.5rem;
  color: #3babd4;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.section_spacer {
  margin-bottom: 4rem;
}
</style>
