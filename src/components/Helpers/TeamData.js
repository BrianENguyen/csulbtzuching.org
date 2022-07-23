/*
TeamData is used to display team members on the Team view.

Officers - main board of the organization
Alumni - LBTC members who had graduated but still continue to help the organization
Former members - any member, student or alumni, who has previously held an officer position and who are no longer active.

For the officers, always put the president and the vice president
in the first and second element respectively
*/

const officers = [
  {
    name: 'Vivienne A.',
    role: 'President',
    src: 'https://res.cloudinary.com/buraiyen/image/upload/v1638054519/CSULB_TC_Website/team_pic/vivienne.jpg',
    description:
      'Plans monthly events, leads general meetings, delegates tasks to other officers',
    links: {
      email: 'mailto:Vivienne.An@student.csulb.edu',
      facebook: 'https://www.facebook.com/profile.php?id=100006438256523',
    },
  },
  {
    name: 'Jose A.',
    role: 'Vice President',
    description: 'Helps lead the organization along with the President',
    src: 'https://res.cloudinary.com/buraiyen/image/upload/v1638071353/CSULB_TC_Website/team_pic/jose.jpg',
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
    description: '',
    src: '',
    links: {},
  },
  {
    name: 'Angeline D.',
    role: 'Secretary',
    description: '',
    src: '',
    links: {},
  },
  {
    name: 'Annie L.',
    role: 'Secretary',
    description:
      "Manages organizations' online drive, records members' volunteering hours",
    src: 'https://res.cloudinary.com/buraiyen/image/upload/v1658600265/CSULB_TC_Website/team_pic/annie.webp',
    links: {
      email: 'annie.lam01@student.csulb.edu',
      instagram: 'https://www.instagram.com/anniee.xv/',
    },
  },
  {
    name: 'Denver D.',
    role: 'Treasurer',
    description: '',
    src: '',
    links: {},
  },
];

const alumnis = [
  {
    name: 'Brian N.',
    role: 'Webmaster / Photographer',
    src: 'https://res.cloudinary.com/buraiyen/image/upload/e_brightness:27/v1638230670/CSULB_TC_Website/team_pic/brian2.jpg',
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
      "Designed our organization's logo, provides art/designs for social media posts",
    src: 'https://res.cloudinary.com/buraiyen/image/upload/v1638064513/CSULB_TC_Website/team_pic/lily.jpg',
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
    src: 'https://res.cloudinary.com/buraiyen/image/upload/v1638304013/CSULB_TC_Website/team_pic/weili.jpg',
  },
];

const formerMembers = [
  {
    name: 'Mahya J.',
    role: 'Former VP of Communications (2021-2022)',
    src: 'https://res.cloudinary.com/buraiyen/image/upload/v1638067243/CSULB_TC_Website/team_pic/mahya.jpg',
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
    src: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1236/v1638065296/CSULB_TC_Website/team_pic/thu.jpg',
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
    src: 'https://res.cloudinary.com/buraiyen/image/upload/v1638506409/CSULB_TC_Website/team_pic/sam_qvxb4x.jpg',
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

export { officers, alumnis, formerMembers };
