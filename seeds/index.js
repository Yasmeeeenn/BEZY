const sequelize = require('../config/connection');
const seedMuscleGroup = require('./galleryData');
const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMuscleGroup();

  await seedPaintings();

  process.exit(0);
};

seedAll();
