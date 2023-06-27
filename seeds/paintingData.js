const { Painting } = require('../models');

const paintingdata = [
  {
    title: 'Close Grip Pushup',
    artist: 'Difficulty Level: Hard',
    //difficulty level should replace artist
    exhibition_date: 'March 30, 2018',
    gallery_id: 1,
    filename: 'close-grip-pushup.jpg',
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
    filename: 'dips-1.jpg',
    description: 'Pink cosmos flowers against a blue sky.',
  },
  {
    title: 'Squats',
    artist: 'Difficulty Level: Hard',
    exhibition_date: 'June 10, 2019',
    gallery_id: 2,
    filename: 'squat.webp',
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
    filename: 'lunges.png',
    description: 'Sun setting in the horizon with waves lapping the shore.',
  },
  {
    title: 'Deadlift',
    artist: 'Difficulty Level: Hard',
    exhibition_date: 'October 15, 2018',
    gallery_id: 3,
    filename: 'dead-lift.webp',
    description:
      'Trees with red, orange, yellow leaves reflected on a still lake.',
  },
  {
    title: 'Pull-ups',
    artist: 'Difficulty Level: Hard',
    exhibition_date: 'November 3, 2016',
    gallery_id: 3,
    filename: 'pull-up.webp',
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
    title: 'Frozen River',
    artist: 'Vlad Sokolovsky',
    exhibition_date: 'December 24, 2020',
    gallery_id: 4,
    filename: '08-frozen-river.jpg',
    description:
      'Trees with white frozen branches reflected on a frozen river against a light pink sky.',
  },
  {
    title: 'Winter Home',
    artist: 'Smit',
    exhibition_date: 'January 20, 2018',
    gallery_id: 4,
    filename: '09-winter-home.jpg',
    description:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
  {
    title: 'Winter Home',
    artist: 'Smit',
    exhibition_date: 'January 20, 2018',
    gallery_id: 4,
    filename: '09-winter-home.jpg',
    description:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
];

const seedPaintings = () => Painting.bulkCreate(paintingdata);

module.exports = seedPaintings;
