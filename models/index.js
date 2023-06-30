const User = require('./User');
const MuscleGroup = require('./MuscleGroup');
const Exercise = require('./Exercise');

MuscleGroup.hasMany(Exercise, {
  foreignKey: 'gallery_id',
});

Exercise.belongsTo(MuscleGroup, {
  foreignKey: 'gallery_id',
});

module.exports = { User, MuscleGroup, Exercise };
