/*
TeamData is used to display team members on the Team view.

Officers - main board of the organization
Alumni - LBTC members who had graduated but still continue to help the organization
Former officers - any member, student or alumni, who has previously held an officer position and who are no longer active.

For the officers, always put the president and the vice president
in the first and second element respectively
*/

const officers = [
  {
    name: 'Vivienne A.',
    role: 'President',
    src: 'https://res.cloudinary.com/buraiyen/image/upload/v1658602388/CSULB_TC_Website/team_pic/vivienne_rvppzg.webp',
    description:
      'Leads the organization and general meetings, delegates tasks to other officers',
    links: {
      email: 'mailto:Vivienne.An@student.csulb.edu',
      facebook: 'https://www.facebook.com/profile.php?id=100006438256523',
    },
  },
  {
    name: 'Jose A.',
    role: 'Vice President',
    description: 'Helps lead the organization along with the President',
    src: 'https://res.cloudinary.com/buraiyen/image/upload/v1658602792/CSULB_TC_Website/team_pic/jose_coodzi.webp',
    links: {
      email: 'mailto:josecarlos.alcantara2016@gmail.com',
      linkedin: 'https://www.linkedin.com/in/jose-alcantara-321378188',
      instagram: 'https://www.instagram.com/jose.alcantara22/',
      art: 'https://www.instagram.com/art.jose22/',
    },
  },
  {
    name: 'Wendy V.',
    role: 'VP of Events',
    description: "Plans organization's monthly events",
    src: 'https://res.cloudinary.com/buraiyen/image/upload/v1658600265/CSULB_TC_Website/team_pic/wendy.webp',
    links: {
      email: 'mailto:wendyvillalobos12357@gmail.com',
    },
  },
  {
    name: 'Angeline D.',
    role: 'Secretary',
    description:
      "Manages organizations's online drive, records members' volunteering hours",
    src: 'https://res.cloudinary.com/buraiyen/image/upload/v1658600265/CSULB_TC_Website/team_pic/angeline.webp',
    links: {
      email: 'mailto:Angeline.Dequit@student.csulb.edu',
      linkedin: 'https://www.linkedin.com/in/angeline-dequit',
      instagram: 'https://www.instagram.com/xangelinee/',
    },
  },
  {
    name: 'Annie L.',
    role: 'Secretary',
    description:
      "Manages organizations's online drive, records members' volunteering hours",
    src: 'https://res.cloudinary.com/buraiyen/image/upload/v1658600265/CSULB_TC_Website/team_pic/annie.webp',
    links: {
      email: 'mailto:annie.lam01@student.csulb.edu',
      instagram: 'https://www.instagram.com/anniee.xv/',
    },
  },
  {
    name: 'Denver D.',
    role: 'Treasurer',
    description: "Manages organization's finances and spending",
    src: 'https://res.cloudinary.com/buraiyen/image/upload/v1658600265/CSULB_TC_Website/team_pic/denver.webp',
    links: {},
  },
];

const alumnis = [
  {
    name: 'Brian N.',
    role: 'Webmaster / Photographer',
    src: 'https://res.cloudinary.com/buraiyen/image/upload/v1658602993/CSULB_TC_Website/team_pic/brian2_myf2av.webp',
    description: 'Manages CSULB TC website, provides photography at events',
    links: {
      email: 'mailto:brian.edison.nguyen@gmail.com',
      linkedin: 'https://www.linkedin.com/in/brian-edison-nguyen/',
      site: 'https://brianenguyen.com',
    },
  },
  {
    name: 'Lily K.',
    role: 'Graphic Designer',
    description:
      "Designed organization's logo, provides art/designs for social media posts",
    src: 'https://res.cloudinary.com/buraiyen/image/upload/v1658602884/CSULB_TC_Website/team_pic/lily_serd5b.webp',
    links: {
      site: 'https://www.lilykang.com/',
      instagram: 'https://www.instagram.com/lilykang.design/',
    },
  },
  {
    name: 'Weili K.',
    role: 'Advisor',
    description:
      'Advises officer board, reports activities to the Tzu Chi Foundation, supports CSULB TC with volunteering opportunities, hosts monthly book club event',
    src: 'https://res.cloudinary.com/buraiyen/image/upload/v1658602388/CSULB_TC_Website/team_pic/weili_i5iiwz.webp',
  },
];

const formerOfficers = [
  {
    name: 'Mahya J.',
    role: 'Former VP of Communications (2021-2022)',
    src: 'https://res.cloudinary.com/buraiyen/image/upload/v1658602985/CSULB_TC_Website/team_pic/mahya_ezx3af.webp',
    description:
      'Sent monthly emails that advertised general meetings and volunteering events',
    links: {
      email: 'mailto:Habibimasar99@gmail.com',
      linkedin: 'https://www.linkedin.com/in/mahya-jalali-42425561/',
      instagram: 'https://www.instagram.com/missshadesofcool/',
      tiktok: 'https://www.tiktok.com/@fragileseams',
    },
  },
  {
    name: 'Thu N.',
    role: 'Former VP of Administration (2021-2022)',
    src: 'https://res.cloudinary.com/buraiyen/image/upload/v1658602393/CSULB_TC_Website/team_pic/thu_tmnwsi.webp',
    description:
      "Managed files on organization's online drive, tracked members' volunteering hours",
    links: {
      email: 'mailto:nhanhthu920@gmail.com',
      linkedin: 'https://www.linkedin.com/in/thu-h-nguyen2/',
      site: 'https://thuhnguyen.com/',
      facebook: 'https://www.facebook.com/profile.php?id=100045753340354',
      instagram: 'https://www.instagram.com/thu.n02/',
    },
  },
  {
    name: 'Samanta C.',
    role: 'Former President (2021-2022)',
    src: 'https://res.cloudinary.com/buraiyen/image/upload/v1658602389/CSULB_TC_Website/team_pic/sam_qvxb4x_j3d0ic.webp',
    description:
      'Planned monthly events, led general meetings, delegated tasks to other officers',
    links: {
      email: 'mailto:samanta.Corte@student.csulb.edu',
      linkedin: 'https://www.linkedin.com/in/samanta-corte-2000',
      instagram: 'https://www.instagram.com/samantacorte/',
      food: 'https://www.instagram.com/forevercherriesontop/',
    },
  },
];

export { officers, alumnis, formerOfficers };
