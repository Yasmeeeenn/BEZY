const User = require('./User');
const MuscleGroup = require('./MuscleGroup');
const Exercise = require('./Exercise');

MuscleGroup.hasMany(Exercise, {
  foreignKey: 'muscleGroup_id',
});

Exercise.belongsTo(MuscleGroup, {
  foreignKey: 'muscleGroup_id',
});

module.exports = { User, MuscleGroup, Exercise };
