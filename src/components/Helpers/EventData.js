/*
The 'name' field is required to have a value. All other fields are optional

The following fields will render "TBA" on the app if left blank:
- date AND time
- location
- link

__________________________________

Date(year, month, day, hour)

Month and hour starts at 0. Hour follows 24-hour clock format

Examples:

March 22, 2022 at 2:00 PM 
Date(2022, 2, 22, 14)

_________________________________
*/

// FIXME: if date OR time is blank, then both will be TBA. Make them unreliant on each other
// TODO: come up with a better name for variables, since months can overlap

const august = [
  {
    name: 'Lucky Month Blessing Tabling',
    date: new Date(2022, 7, 27, 12),
    time: '9:00 AM - 12:00 PM',
    location: '1355 Broad Avenue, Wilmington, CA 90744',
    description: `Come help us promote Tzu Chi values to children at our tabling event inside the Wilmington Tzu Chi clinic!`,
    img: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1658705642/CSULB_TC_Website/event_banner/candle.webp',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdgdTxd-x_Hbg0S31qnimcXQ6FGPkqkLny3mttuSauu4EkI7A/viewform',
  },
  {
    name: 'Gage Food Distribution',
    date: new Date(2022, 7, 27, 10),
    time: '8:00 AM - 10:00 AM',
    location: '2880 E Gage Avenue, Huntington Park, CA 90255',
    description: `Help distribute food for families!`,
    img: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1658705642/CSULB_TC_Website/event_banner/food_distribution2.webp',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdgdTxd-x_Hbg0S31qnimcXQ6FGPkqkLny3mttuSauu4EkI7A/viewform',
  },
  {
    name: 'Wilmington Food Distribution',
    date: new Date(2022, 7, 20, 10),
    time: '8:00 AM - 10:00 AM',
    location: '1355 Broad Avenue, Wilmington, CA 90744',
    description: `Help distribute food for families!`,
    img: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1658705642/CSULB_TC_Website/event_banner/food_distribution.webp',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdgdTxd-x_Hbg0S31qnimcXQ6FGPkqkLny3mttuSauu4EkI7A/viewform',
  },
  {
    name: 'Online Dharma Study',
    date: new Date(2022, 7, 7, 18),
    time: '5:00 PM - 6:00 PM',
    location: 'Zoom',
    description: `Connect with other Tzu Chi members from around the world to study Dharma teachings, as well as learn
      about the journeys and experiences that other Tzu Chi members have to share.`,
    img: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1658705642/CSULB_TC_Website/event_banner/flower.webp',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdgdTxd-x_Hbg0S31qnimcXQ6FGPkqkLny3mttuSauu4EkI7A/viewform',
  },
  {
    name: 'Gage Middle School Back-to-School',
    date: new Date(2022, 7, 6, 11),
    time: '8:00 AM - 11:00 AM',
    location: '2880 E Gage Avenue, Huntington Park, CA 90255',
    description: `Volunteers will help kids K-3 learn about and do arts and crafts!`,
    img: 'https://res.cloudinary.com/buraiyen/image/upload/v1659632593/CSULB_TC_Website/event_banner/tutoring_rbi3qa.webp',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdgdTxd-x_Hbg0S31qnimcXQ6FGPkqkLny3mttuSauu4EkI7A/viewform',
  },
];

const may = [
  {
    name: 'Gage Food Distribution',
    date: new Date(2022, 4, 28, 10),
    time: '8:00 AM - 10:00 AM',
    location: '2880 E Gage Avenue, Huntington Park, CA 90255',
    description: `Help distribute food for families!`,
    img: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1658705642/CSULB_TC_Website/event_banner/food_distribution.webp',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfB1rfXog-DggKiKlDC31sL1IW3vfvrjd4CZpy9cgMMo819OA/viewform',
  },
  {
    name: 'Wilmington Food Distribution',
    date: new Date(2022, 4, 21, 10),
    time: '8:00 AM - 10:00 AM',
    location: '1355 Broad Avenue, Wilmington, CA 90744',
    description: `Help distribute food for families!`,
    img: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1658705642/CSULB_TC_Website/event_banner/food_distribution.webp',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfB1rfXog-DggKiKlDC31sL1IW3vfvrjd4CZpy9cgMMo819OA/viewform',
  },
  {
    name: 'Buddha Bathing Ceremony',
    date: new Date(2022, 4, 7, 21),
    time: '3:00 PM',
    location:
      'Tzu Chi USA National Headquarters, 1100 S. Valley Center Ave., San Dimas, CA 91773',
    description: `Annual Buddha Bathing Ceremonies are taking place at Tzu Chi Global 
       Headquarters in Taiwan and across the US. It’s a triple celebration of Mother’s Day, Buddha Day, and Tzu Chi Day!`,
    img: '',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfB1rfXog-DggKiKlDC31sL1IW3vfvrjd4CZpy9cgMMo819OA/viewform',
  },
  {
    name: 'Online Warm Gathering Book Club',
    date: new Date(2022, 4, 4, 21),
    time: '7:30 PM - 8:30 PM',
    location: 'Zoom',
    description: `Hosted by our advisor Weili, this Warm Gathering Book Club allows us to read and discuss various books that are related
      to Tzu Chi and other topics. We also have other fun activities as well, such as music performances, drawing, and much more!`,
    img: '',
    link: '',
  },
];
const april = [
  {
    name: 'Wilmington Food Distribution',
    date: new Date(2022, 3, 23, 10),
    time: '8:00 AM - 10:00 AM',
    location: '1355 Broad Avenue, Wilmington, CA 90744',
    description: `Help distribute food for families! We have two food distributions happening at the same time and day.
      Feel free to join whichever one is convenient for you!`,
    img: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1658705642/CSULB_TC_Website/event_banner/food_distribution.webp',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScy0PHfB9q9Rt4srRTnAMvFrp7iYrmM8b1bBUKsK7F9WgmLaw/viewform',
  },
  {
    name: 'Gage Food Distribution',
    date: new Date(2022, 3, 23, 10),
    time: '8:00 AM - 10:00 AM',
    location: '2880 E Gage Avenue, Huntington Park, CA 90255',
    description: `Help distribute food for families! We have two food distributions happening at the same time and day.
      Feel free to join whichever one is convenient for you!`,
    img: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1658705642/CSULB_TC_Website/event_banner/food_distribution.webp',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScy0PHfB9q9Rt4srRTnAMvFrp7iYrmM8b1bBUKsK7F9WgmLaw/viewform',
  },
  {
    name: 'Compassion in Action: 2022 Tzu Chi Walkathon',
    date: new Date(2022, 3, 16, 14),
    time: '9 AM - 2 PM',
    location:
      'Tzu Chi USA National Headquarters, 1100 S. Valley Center Ave., San Dimas, CA 91773, or flexible location',
    description: `We’re safely gathering for a 5K to raise awareness and funds that support our missions of medicine and education. 
      Whether you walk, run, or bike, we’re determined to get compassion going! If you are unable to make it to the location,
      then you are free to participate where ever it is convenient for you!`,
    img: '',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScy0PHfB9q9Rt4srRTnAMvFrp7iYrmM8b1bBUKsK7F9WgmLaw/viewform',
  },
  {
    name: 'Beach Clean Up Community Weekend',
    date: new Date(2022, 3, 10, 12),
    time: '10 AM',
    location: 'Seal Beach (specific location will be provided the day before)',
    description: `Come hang out with us while we help clean up trash at Seal Beach. Feel free to bring along your friends too!`,
    img: '',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScy0PHfB9q9Rt4srRTnAMvFrp7iYrmM8b1bBUKsK7F9WgmLaw/viewform',
  },
  {
    name: 'Online Warm Gathering Book Club',
    date: new Date(2022, 3, 6, 21),
    time: '7:30 PM - 8:30 PM',
    location: 'Zoom',
    description: `Hosted by our advisor Weili, this Warm Gathering Book Club allows us to read and discuss various books that are related
      to Tzu Chi and other topics. We also have other fun activities as well, such as music performances, drawing, and much more!`,
    img: '',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScy0PHfB9q9Rt4srRTnAMvFrp7iYrmM8b1bBUKsK7F9WgmLaw/viewform',
  },
  {
    name: 'Online Dharma Study',
    date: new Date(2022, 3, 3, 18),
    time: '5:00 PM - 6:00 PM',
    location: 'Zoom',
    description: `Connect with other Tzu Chi members from around the world to study Dharma teachings, as well as learn
      about the journeys and experiences that other Tzu Chi members have to share.`,
    img: '',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScy0PHfB9q9Rt4srRTnAMvFrp7iYrmM8b1bBUKsK7F9WgmLaw/viewform',
  },
];

const march = [
  {
    name: 'Food Distribution',
    date: new Date(2022, 2, 26, 10),
    time: '8:00 AM - 10:00 AM',
    location: '2880 E Gage Avenue, Huntington Park, CA 90255',
    description: `Help distribute food for families!`,
    img: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1658705642/CSULB_TC_Website/event_banner/food_distribution.webp',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScVzPaRfwyA8wCQzPfM8axYX3qeMtzngX0Qy4wWwp3Rf-MJQA/viewform',
  },
  {
    name: 'Second General Meeting',
    date: new Date(2022, 2, 22, 19),
    time: '6:30 PM - 7:30 PM',
    location: 'CSULB, HHS1 Room 205',
    description: `This meeting we will go in more depth about Tzu Chi and
       as always we have some free food or drinks to accompany the meeting. We will gladly be talking about even more volunteering events. We really hope you can join us this Tuesday. Thank you. :) `,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeg6XyGs5tnxSLXqP0Heyj4EERLdJEBHgZLdo1Ucn5T9X62pg/viewform',
  },
  {
    name: 'Food Distribution',
    date: new Date(2022, 2, 19, 10),
    time: '8:00 AM - 10:00 AM',
    location: '1355 Broad Avenue, Wilmington, CA 90744',
    description: `Help distribute food for families!`,
    img: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1658705642/CSULB_TC_Website/event_banner/food_distribution.webp',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScVzPaRfwyA8wCQzPfM8axYX3qeMtzngX0Qy4wWwp3Rf-MJQA/viewform',
  },
  {
    name: 'First General Meeting',
    date: new Date(2022, 2, 10, 19),
    time: '6:00 PM - 7:00 PM',
    location: 'CSULB HHS1 Room 205',
    description: `Great meeting so many of you at Week of Welcome. First General Meeting 
        is on Thursday, March 10th @ 6:00PM - 7:00 PM!  We will dive deeper into 
        why we joined Tzu Chi, where we will touch upon aspects of moral value, 
        character development, compassion, & volunteering events. We will also 
        announce officer positions that will be available for those interested in
        gaining leadership roles. While we have not been assigned our classroom location 
        yet we will still hold this general meeting :)`,
    link: '',
  },
];

const december = [
  {
    name: 'Food Distribution',
    date: new Date(2021, 11, 18, 11),
    time: '7:30 AM - 11:00 AM',
    location: '6720 Miles Ave, Huntington Park, CA 90255',
    description: 'Help distribute food for families!',
    img: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1658705642/CSULB_TC_Website/event_banner/food_distribution.webp',
    link: '',
  },
  {
    name: 'Food Distribution',
    date: new Date(2021, 11, 11, 11),
    time: '8:30 AM - 10:30 AM',
    location: 'Tzu Chi Health Center - 1355 Broad Ave, Wilmington, CA 90744',
    description: 'Help distribute food for families!',
    img: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1658705642/CSULB_TC_Website/event_banner/food_distribution.webp',
    link: '',
  },
  {
    name: 'December General Meeting',
    date: new Date(2021, 11, 9, 11),
    time: '8:00 PM - 9:00 PM',
    location: 'Zoom',
    description:
      "Join us this Thursday at our last meeting of the Fall 2021 semester! Come to hang and relax with CSULB Tzu Ching, December 9th at 8 pm! Register for December's General Meeting for the zoom meeting information. Happy Holidays!",
    link: '',
  },
  {
    name: 'Online Dharma Study',
    date: new Date(2021, 11, 5, 11),
    time: '5:00 PM - 6:00 PM',
    location: 'Zoom',
    description: '',
    link: '',
  },
];

const november = [
  {
    name: 'Bowling Social',
    date: new Date(2021, 10, 21, 14),
    time: '12:00 PM - 2:00PM',
    location: 'Lakewood Center, 500 Lakewood Center Mall, Lakewood, CA 90712',
    description: '',
    link: '',
  },
  {
    name: 'Medical Outreach',
    date: new Date(2021, 10, 13, 10),
    time: '9:00 AM',
    location: 'Tzu Chi Health Center - 1355 Broad Ave, Wilmington, CA 90744',
    description:
      'Assist medical professionals in providing medical services to those in need!',
    img: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_678/v1636487294/CSULB_TC_Website/DSC_0118_c3fvq6.jpg',
    link: '',
  },
];

export { december, november, march, april, may, august };
