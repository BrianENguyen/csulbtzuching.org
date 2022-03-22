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
*/

const march = [
  {
    name: 'Food Distribution',
    date: new Date(2022, 2, 26, 10),
    time: '8:00 AM - 10:00 AM',
    location: '2880 E Gage Avenue, Huntington Park, CA 90255',
    description: `Help distribute food for families!`,
    img: 'https://res.cloudinary.com/buraiyen/image/upload/v1638307033/CSULB_TC_Website/fooddistribution.jpg',
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
    img: 'https://res.cloudinary.com/buraiyen/image/upload/v1638307033/CSULB_TC_Website/fooddistribution.jpg',
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
    img: 'https://res.cloudinary.com/buraiyen/image/upload/v1638307033/CSULB_TC_Website/fooddistribution.jpg',
    link: '',
  },
  {
    name: 'Food Distribution',
    date: new Date(2021, 11, 11, 11),
    time: '8:30 AM - 10:30 AM',
    location: 'Tzu Chi Health Center - 1355 Broad Ave, Wilmington, CA 90744',
    description: 'Help distribute food for families!',
    img: 'https://res.cloudinary.com/buraiyen/image/upload/v1638307033/CSULB_TC_Website/fooddistribution.jpg',
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

export { december, november, march };
