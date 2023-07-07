const sequelize = require('../config/connection');
const seedMuscleGroups = require('./muscleGroupData');
const seedExercises = require('./exerciseData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMuscleGroups();

  await seedExercises();

  process.exit(0);
};

seedAll();
