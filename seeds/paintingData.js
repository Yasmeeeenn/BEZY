const { Painting } = require('../models');

const paintingdata = [
  {
    title: 'Incline Bench Press',
    difficulty: 'Hard',
    exhibition_date: 'March 30, 2018',
    gallery_id: 1,
    filename: "chest-press.jpg",
    motion_file: 'Barbellbench-Press.gif',
    description:
      'The bench press is a classic strength training exercise where you lie on a bench, lower a barbell to your chest, and then push it back up, targeting the muscles of your chest, shoulders, and triceps to build upper body strength and muscle mass.',
  },
  {
    title: 'Cable Crossover',
    difficulty: 'Easy',
    exhibition_date: 'May 05, 2017',
    gallery_id: 1,
    filename: 'cable-crossover.jpg',
    motion_file: 'cable-crossover.gif',
    description: 'Pink cosmos flowers against a blue sky.',
  },

  {
    title: 'Dips',
    difficulty: 'Moderate',
    exhibition_date: 'May 05, 2017',
    gallery_id: 1,
    filename: 'dips.jpg',
    motion_file: 'dips.gif',
    description: 'Pink cosmos flowers against a blue sky.',
  },
  {
    title: 'Squats',
    difficulty: 'Hard',
    exhibition_date: 'June 10, 2019',
    gallery_id: 2,
    filename: 'squat.jpg',
    motion_file: 'squat.gif',
    description: 'Sandy beach with the blue sea and sky in the background.',
  },
  {
    title: 'Good-Mornings',
    difficulty: 'Moderate',
    exhibition_date: 'July 4, 2020',
    gallery_id: 2,
    filename: 'good-mornings.jpg',
    motion_file: 'good-mornings.gif',
    description: 'Two beach chairs under a beach umbrella on the beach.',
  },
  {
    title: 'Lunges',
    difficulty: 'Moderate',
    exhibition_date: 'August 14, 2016',
    gallery_id: 2,
    filename: 'lunges.jpg',
    motion_file: 'lunges.gif',
    description: 'Sun setting in the horizon with waves lapping the shore.',
  },
  {
    title: 'Pull-ups',
    difficulty: 'Hard',
    exhibition_date: 'November 3, 2016',
    gallery_id: 3,
    filename: 'pull-up.jpg',
    motion_file: 'pull-up.gif',
    description:
      'Mountains with red and yellow leaves against a background of hazy rolling hills.',
  },
  {
    title: 'Lat Pulldown',
    difficulty: 'Hard',
    exhibition_date: 'November 3, 2016',
    gallery_id: 3,
    filename: 'lat-pulldown.jpg',
    motion_file: 'lat-pulldown.gif',
    description:
      'Mountains with red and yellow leaves against a background of hazy rolling hills.',
  },
  {
    title: 'Bent over row',
    difficulty: 'Moderate',
    exhibition_date: 'November 3, 2016',
    gallery_id: 3,
    filename: 'bent-over-row.jpg',
    motion_file: 'bent-over-row.gif',
    description:
      'Mountains with red and yellow leaves against a background of hazy rolling hills.',
  },
  {
    title: 'Tricep Kickback',
    difficulty: 'Easy',
    exhibition_date: 'December 24, 2020',
    gallery_id: 4,
    filename: 'tricep-kickback.jpg',
    motion_file: 'tricep-kickback.gif',
    description:
      'Trees with white frozen branches reflected on a frozen river against a light pink sky.',
  },
  {
    title: 'Barbell Curl',
    difficulty: 'Easy',
    exhibition_date: 'January 20, 2018',
    gallery_id: 4,
    filename: 'barbell-curl.jpg',
    motion_file: 'barbell-curl.gif',
    description:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
  {
    title: 'Hammer Curl',
    difficulty: 'Easy',
    exhibition_date: 'January 20, 2018',
    gallery_id: 4,
    filename: 'hammer-curl.jpg',
    motion_file: 'hammer-curl.gif',
    description:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },

  {
    title: 'Decline Crunch',
    difficulty: 'Easy',
    exhibition_date: 'January 20, 2018',
    gallery_id: 5,
    filename: 'decline-crunch.jpg',
    motion_file: 'decline-crunch.gif',
    description:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
  {
    title: 'Sit-Ups',
    difficulty: 'Easy',
    exhibition_date: 'January 20, 2018',
    gallery_id: 5,
    filename: 'sit-up.jpg',
    motion_file: 'sit-up.gif',
    description:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
  {
    title: 'Leg Lifts',
    difficulty: 'Easy',
    exhibition_date: 'January 20, 2018',
    gallery_id: 5,
    filename: 'leg-lifts.jpg',
    motion_file: 'leg-lifts.gif',
    description:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
];

const seedPaintings = () => Painting.bulkCreate(paintingdata);

module.exports = seedPaintings;
