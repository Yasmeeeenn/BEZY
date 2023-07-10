const router = require('express').Router();
const { MuscleGroup, Exercise } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbMuscleGroupData = await MuscleGroup.findAll({
      include: [
        {
          model: Exercise,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const muscleGroups = dbMuscleGroupData.map((muscleGroup) =>
      muscleGroup.get({ plain: true })
    );
    console.log(muscleGroups)
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('homepage', {
      muscleGroups,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET muscle groups
router.get('/muscleGroup/:id', async (req, res) => {
  try {
    const dbMuscleGroupData = await MuscleGroup.findByPk(req.params.id, {
      include: [
        {
          model: Exercise,
          attributes: [
            'id',
            'title',
            'difficulty',
            'exhibition_date',
            'filename',
            'description',
          ],
        },
      ],
    });

    const muscleGroup = dbMuscleGroupData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'gallery' template
    res.render('muscleGroup', { muscleGroup, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/about', (req, res) => {
res.render('about')
});

router.get('/contact', (req, res) => {
  res.render('contact')
  });

router.get('/printables', (req, res) => {
  res.render('printables')
  });

router.get('/exercise/:id', async (req, res) => {
  try {
    const dbExerciseData = await Exercise.findByPk(req.params.id);

    const exercise = dbExerciseData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('exercise', { exercise, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;
