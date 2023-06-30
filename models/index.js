const User = require('./User');
const MuscleGroup = require('./MuscleGroup');
const Painting = require('./Painting');

Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

Painting.belongsTo(MuscleGroup, {
  foreignKey: 'gallery_id',
});

module.exports = { User, MuscleGroup, Painting };
