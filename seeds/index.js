const sequelize = require('../config/connection');
const seedMuscleGroups = require('./muscleGroupData');
const seedExercises = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMuscleGroup();

  await seedExercises();

  process.exit(0);
};

seedAll();
