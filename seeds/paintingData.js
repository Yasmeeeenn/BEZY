const { Painting } = require('../models');

const paintingdata = [
  {
    title: 'Close Grip Pushup',
    artist: 'Difficulty Level: Hard',
    //difficulty level should replace artist
    exhibition_date: 'March 30, 2018',
    gallery_id: 1,
    filename: 'Barbell-Bench-Press.gif',
    description:
      'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: 'Incline Bench Press',
    artist: 'Difficulty Level: Easy',
    exhibition_date: 'May 05, 2017',
    gallery_id: 1,
    filename: 'incline-db-bench.jpg',
    description: 'Pink cosmos flowers against a blue sky.',
  },

  {
    title: 'Dips',
    artist: 'Difficulty Level: Moderate',
    exhibition_date: 'May 05, 2017',
    gallery_id: 1,
    filename: 'dips.jpg',
    description: 'Pink cosmos flowers against a blue sky.',
  },
  {
    title: 'Squats',
    artist: 'Difficulty Level: Hard',
    exhibition_date: 'June 10, 2019',
    gallery_id: 2,
    filename: 'squat.jpg',
    description: 'Sandy beach with the blue sea and sky in the background.',
  },
  {
    title: 'Glute Bridges',
    artist: 'Difficulty Level: Easy',
    exhibition_date: 'July 4, 2020',
    gallery_id: 2,
    filename: 'glute-bridges.jpeg',
    description: 'Two beach chairs under a beach umbrella on the beach.',
  },
  {
    title: 'Lunges',
    artist: 'Difficulty Level: Moderate',
    exhibition_date: 'August 14, 2016',
    gallery_id: 2,
    filename: 'lunges.jpg',
    description: 'Sun setting in the horizon with waves lapping the shore.',
  },
  {
    title: 'Pull-ups',
    artist: 'Difficulty Level: Hard',
    exhibition_date: 'November 3, 2016',
    gallery_id: 3,
    filename: 'pull-up.jpg',
    description:
      'Mountains with red and yellow leaves against a background of hazy rolling hills.',
  },
  {
    title: 'Lat Pulldown',
    artist: 'Difficulty Level: Hard',
    exhibition_date: 'November 3, 2016',
    gallery_id: 3,
    filename: 'lat-pulldown.jpg',
    description:
      'Mountains with red and yellow leaves against a background of hazy rolling hills.',
  },
  {
    title: 'Bent over row',
    artist: 'Difficulty Level: Moderate',
    exhibition_date: 'November 3, 2016',
    gallery_id: 3,
    filename: 'bent-over-row.jpg',
    description:
      'Mountains with red and yellow leaves against a background of hazy rolling hills.',
  },
  {
    title: 'Skull Crusher',
    artist: 'Difficulty Level: Moderate',
    exhibition_date: 'December 24, 2020',
    gallery_id: 4,
    filename: 'skull-crusher.jpg',
    description:
      'Trees with white frozen branches reflected on a frozen river against a light pink sky.',
  },
  {
    title: 'Barbell Curl',
    artist: 'Difficulty Level: Easy',
    exhibition_date: 'January 20, 2018',
    gallery_id: 4,
    filename: 'barbell-curl.jpg',
    description:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
  {
    title: 'Hammer Curl',
    artist: 'Difficulty Level: Easy',
    exhibition_date: 'January 20, 2018',
    gallery_id: 4,
    filename: 'hammer-curl.jpg',
    description:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },

  {
    title: 'Cable Crunch',
    artist: 'Difficulty Level: Easy',
    exhibition_date: 'January 20, 2018',
    gallery_id: 5,
    filename: 'cable-crunch.jpg',
    description:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
  {
    title: 'Sit-Ups',
    artist: 'Difficulty Level: Easy',
    exhibition_date: 'January 20, 2018',
    gallery_id: 5,
    filename: 'sit-up.jpg',
    description:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
  {
    title: 'Leg Lifts',
    artist: 'Difficulty Level: Easy',
    exhibition_date: 'January 20, 2018',
    gallery_id: 5,
    filename: 'leg-lifts.jpg',
    description:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
];

const seedPaintings = () => Painting.bulkCreate(paintingdata);

module.exports = seedPaintings;
