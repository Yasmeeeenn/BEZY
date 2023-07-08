const { MuscleGroup } = require("../models");

const muscleGroupData = [
  {
    name: "Chest",
    starting_date: "April 20, 2021 07:00:00",
    ending_date: "June 21, 2021 17:00:00",
    filename: "chest-gallery.jpg",
  
  },
  {
    name: "Legs",
    starting_date: "June 22, 2021 09:00:00",
    ending_date: "September 22, 2021 22:00:00",
    filename: "legs-gallery.jpg",
  },
  {
    name: "Back",
    starting_date: "September 23, 2021 08:30:00",
    ending_date: "December 21, 2021 20:30:00",
    filename: "back-gallery.jpg",
  },
  {
    name: "Arms",
    starting_date: "December 22, 2020 11:00:00",
    ending_date: "March 19, 2021 19:00:00",
    filename: "arm-gallery.jpg",
  },
  {
    name: "Abs",
    starting_date: "December 22, 2020 11:00:00",
    ending_date: "March 19, 2021 19:00:00",
    filename: "core-gallery.jpg",
  },  
  {
    name: "Shoulders",
    starting_date: "December 22, 2020 11:00:00",
    ending_date: "March 19, 2021 19:00:00",
    filename: "shoulder-gallery.png",
  },
];

const seedMuscleGroups = () => MuscleGroup.bulkCreate(muscleGroupData);

module.exports = seedMuscleGroups;
