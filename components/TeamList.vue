<template>
  <section id="team" class="mb-32">
    <h2>2023-2024 Team</h2>
    <div class="mb-16">
      <h3>Officers</h3>
      <div class="grid gap-4 zero:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <TeamCard
          v-for="officer in officers"
          :member="officer"
          :key="officer.name"
        />
      </div>
    </div>
    <h3>Alumni</h3>
    <p>
      In Tzu Chi, the term "alumni" refers to any members who graduated from
      college but still participate in Tzu Chi activities
    </p>
    <div class="grid gap-4 zero:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <TeamCard v-for="alumni in alumnis" :member="alumni" :key="alumni.name" />
    </div>
  </section>
</template>

<script>
const imgPrefix = 'https://res.cloudinary.com/buraiyen/image/upload/v1693358216/CSULB_TC_Website/team_pic'
export default {
  data() {
    return {
      officers: [
        {
          name: 'Angeline D.',
          role: 'President',
          description: 'Leads the organization and general meetings, delegates tasks to other officers',
          img: `${imgPrefix}/angeline2023.webp`,
          socialLinks: {
            email: 'mailto:Angeline.Dequit@student.csulb.edu',
            linkedIn: 'https://www.linkedin.com/in/angeline-dequit',
            instagram: 'https://www.instagram.com/xangelinee/'
          }
        },
        {
          name: 'Denver D.',
          role: 'Executive Vice President & Event Coordinator',
          description: 'Assists the President in club management helps coordinate volunteering events',
          img: `${imgPrefix}/denver2023.webp`,
          socialLinks: {}
        },
        {
          name: 'Annie L.',
          role: 'Secretary',
          description: 'Tracks volunteering hours of all members and officers, documents events and meetings with notes',
          img: `${imgPrefix}/annie2023.webp`,
          socialLinks: {
            email: 'mailto:annie.lam01@student.csulb.edu',
            instagram: 'https://www.instagram.com/anniee.xv/'
          }
        },
        {
          name: 'Martin P.',
          role: 'Treasurer & VP of Human Resources',
          description: 'Handles all financials and budgeting of the organization, leads the recruitment and retention efforts of members',
          img: `${imgPrefix}/martin2023.webp`,
          socialLinks: {
          }
        },
        {
          name: 'Emmanuel G.',
          role: 'VP of Communication & Documentation Lead',
          description: 'Engages with members, manages media content, ensures event documentation through photos and videos',
          img: `${imgPrefix}/emmanuel2023.webp`,
          socialLinks: {
            website: 'https://actoremmanuelgascaofficial.squarespace.com',
            linkedIn: 'https://linkedin.com/in/emmanuel-gasca-a49887196',
            instagram: 'https://www.instagram.com/emmanuellgasca'
          }
        },
      ],
      alumnis: [
        {
          name: 'Brian N.',
          role: 'Webmaster',
          description: 'Maintains the CSULB Tzu Ching website',
          img: `${imgPrefix}/brian2_myf2av.webp`,
          socialLinks: {
            email: 'mailto:brian.edison.nguyen@gmail.com',
            website: 'https://brianenguyen.com',
            linkedIn: 'https://linkedin.com/in/brian-e-nguyen',
          }
        },
        {
          name: 'Lily K.',
          role: 'Graphic Designer',
          description: 'Designed organization\'s logo, provides art / designs for social media posts',
          img: `https://res.cloudinary.com/buraiyen/image/upload/v1693522992/CSULB_TC_Website/team_pic/lily2023.webp`,
          socialLinks: {
            website: 'https://lilykang.com',
            instagram: 'https://instagram.com/lilykang.design',
          }
        },
      {
          name: 'Weili Kang',
          role: 'Advisor',
          description: 'Advises officer board, report activities to the Tzu Chi Foundation, supports CSULB TC with volunteering opporunities',
          img: `${imgPrefix}/weili_i5iiwz.webp`,
          socialLinks: {
          }
        },
      ]
    }
  },
  created() {
    this.officers.forEach(officer => {
      officer.imgAlt = `${officer.name} profile pic`;
    });
  }
}
</script>
