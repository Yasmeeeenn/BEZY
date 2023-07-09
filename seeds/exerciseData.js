const { Exercise } = require("../models");

const exerciseData = [
  {
    title: "Barbell Bench Press",
    difficulty: "Hard",
    exhibition_date: "July 4, 2020",
    muscleGroup_id: 1,
    filename: "barbell-bench-press.png",
    motion_file: "barbell-bench-press.gif",
    description:
      "The bench press is a classic strength training exercise targeting the muscles of your chest, shoulders, and triceps to build upper body strength and muscle mass.",
  },
  {
    title: "Svend Press",
    difficulty: "Moderate",
    exhibition_date: "July 4, 2020",
    muscleGroup_id: 1,
    filename: "svend-press.png",
    motion_file: "svend-press.gif",
    description:
      "The Svend press is an exercise where you hold two plates together in front of your chest and press them outward, engaging the chest and shoulder muscles while promoting muscular endurance and stability in the upper body.",
  },
  {
    title: "Cable Crossover",
    difficulty: "Easy",
    exhibition_date: "July 4, 2020",
    muscleGroup_id: 1,
    filename: "cable-crossover.png",
    motion_file: "cable-crossover.gif",
    description:
      "The cable crossover primarily targets the muscles of the chest, shoulders, and arms.",
  },
  {
    title: "Chest Dips",
    difficulty: "Moderate",
    exhibition_date: "July 4, 2020",
    muscleGroup_id: 1,
    filename: "chest-dips.jpg",
    motion_file: "chest-dips.gif",
    description:
      "Chest dips are a bodyweight exercise where you suspend yourself on parallel bars, lowering your body down and then pushing up, primarily targeting the chest, triceps, and shoulders while improving upper body strength and muscular development.",
  },
  {
    title: "Decline Cable Fly",
    difficulty: "Hard",
    exhibition_date: "July 4, 2020",
    muscleGroup_id: 1,
    filename: "decline-cable-fly.jpg",
    motion_file: "decline-cable-fly.gif",
    description:
      "The decline cable fly is a resistance exercise targeting the muscles of the lower chest and shoulders.",
  },
  {
    title: "Chest Press",
    difficulty: "Moderate",
    exhibition_date: "July 4, 2020",
    muscleGroup_id: 1,
    filename: "chest-press.png",
    motion_file: "chest-press.gif",
    description:
      "The chest press is a popular and effective exercise that primarily targets the muscles of the chest, including the pectoralis major and pectoralis minor.",
  },
  {
    title: "Decline Push-Ups",
    difficulty: "Hard",
    exhibition_date: "July 4, 2020",
    muscleGroup_id: 1,
    filename: "decline-pushup.png",
    motion_file: "decline-pushup.gif",
    description:
      "Decline pushups are a variation of the classic pushup exercise where the feet are elevated on an elevated surface, placing additional emphasis on the upper chest, shoulders, and triceps.",
  },
  {
    title: "Dips",
    difficulty: "Moderate",
    exhibition_date: "July 4, 2020",
    muscleGroup_id: 1,
    filename: "dips.png",
    motion_file: "dips.gif",
    description:
      "Bench dips are a bodyweight exercise where you lower and raise your body using a bench or elevated surface, primarily targeting the triceps and chest muscles.",
  },
  {
    title: "Dumbbell Fly",
    difficulty: "Moderate",
    exhibition_date: "July 4, 2020",
    muscleGroup_id: 1,
    filename: "dumbbell-fly.png",
    motion_file: "dumbbell-fly.gif",
    description:
      "Dumbbell flys are an exercise where you lie on a bench and, with a dumbbell in each hand, bring your arms out to the sides in a wide arc motion, targeting the chest muscles.",
  },
  {
    title: "Front Raise",
    difficulty: "Moderate",
    exhibition_date: "July 4, 2020",
    muscleGroup_id: 1,
    filename: "front-raise.png",
    motion_file: "front-raise.gif",
    description:
      "A weighted front raise is an exercise where you hold a weight in front of your body and lift it up to shoulder level, primarily targeting the front deltoid muscles.",
  },
  {
    title: "Squats",
    difficulty: "Hard",
    exhibition_date: "June 10, 2019",
    muscleGroup_id: 2,
    filename: "squat.jpg",
    motion_file: "squat.gif",
    description:
      "Squats are a compound exercise that targets the lower body muscles by bending at the knees and hips.",
  },
  {
    title: "Good-Mornings",
    difficulty: "Moderate",
    exhibition_date: "July 4, 2020",
    muscleGroup_id: 2,
    filename: "good-mornings.jpg",
    motion_file: "good-mornings.gif",
    description:
      "Good mornings are a resistance exercise targeting the muscles of the lower back, hamstrings, and glutes.",
  },
  {
    title: "Lunges",
    difficulty: "Moderate",
    exhibition_date: "August 14, 2016",
    muscleGroup_id: 2,
    filename: "lunges.jpg",
    motion_file: "lunges.gif",
    description:
      "Lunges are a dynamic lower body exercise primarily target the muscles of the legs, including the quadriceps, hamstrings, and glutes, while also engaging the core for stability.",
  },
  {
    title: "Straight Leg Deadlift",
    difficulty: "Hard",
    exhibition_date: "June 10, 2019",
    muscleGroup_id: 2,
    filename: "straight-leg-deadlift.png",
    motion_file: "straight-leg-deadlift.gif",
    description:
      "The straight leg deadlift is a strength training exercise primarily targeting the hamstrings and glutes while also engaging the lower back and core for stability.",
  },
  {
    title: "Jump Squats",
    difficulty: "Moderate",
    exhibition_date: "June 10, 2019",
    muscleGroup_id: 2,
    filename: "jump-squats.jpg",
    motion_file: "jump-squats.gif",
    description:
      "Jump squats are a plyometric exercise where you perform a squat and explosively jump up, engaging the lower body muscles while improving power and cardiovascular fitness.",
  },
  {
    title: "Lunge Step-Up",
    difficulty: "Hard",
    exhibition_date: "June 10, 2019",
    muscleGroup_id: 2,
    filename: "lunge-step-up.png",
    motion_file: "lunge-step-up.gif",
    description:
      "Lunge step-ups are a compound exercise where you step onto an elevated platform with one foot, then drive the opposite knee up towards the chest, targeting the leg muscles and improving balance and stability.",
  },
  {
    title: "Pistol Squat",
    difficulty: "Hard",
    exhibition_date: "June 10, 2019",
    muscleGroup_id: 2,
    filename: "pistol-squat.jpg",
    motion_file: "pistol-squat.gif",
    description:
      "Pistol squats are a challenging single-leg exercise where you balance on one leg while squatting down to a deep position, effectively targeting the leg muscles and enhancing strength, stability, and mobility.",
  },
  {
    title: "Split Squat",
    difficulty: "Moderate",
    exhibition_date: "June 10, 2019",
    muscleGroup_id: 2,
    filename: "split-squat.jpg",
    motion_file: "split-squat.gif",
    description:
      "Split squats, also known as static lunges, are a lower body exercise where one foot is positioned forward and the other foot is positioned back, targeting the quadriceps, glutes, and hamstrings while improving balance and stability.",
  },
  {
    title: "Sumo Squat",
    difficulty: "Moderate",
    exhibition_date: "June 10, 2019",
    muscleGroup_id: 2,
    filename: "sumo-squat.jpg",
    motion_file: "sumo-squat.gif",
    description:
      "Sumo squats are a variation of the squat exercise where you stand with your feet wider than hip-width apart, toes pointed outward, and perform a squat, targeting the inner thighs, glutes, and quadriceps while enhancing lower body strength and stability.",
  },
    {
    title: "Glute Bridge",
    difficulty: "Easy",
    exhibition_date: "June 10, 2019",
    muscleGroup_id: 2,
    filename: "glute-bridges.png",
    motion_file: "glute-bridges.gif",
    description:
      "Glute bridges are a exercise where you lie on your back, bend your knees, and lift your hips off the ground, engaging and strengthening the gluteal muscles.",
  },
  {
    title: "Pull-Ups",
    difficulty: "Hard",
    exhibition_date: "November 3, 2016",
    muscleGroup_id: 3,
    filename: "pull-up.png",
    motion_file: "pull-up.gif",
    description:
      "Pull-ups are a challenging upper body exercise targeting the muscles of the back, arms, and shoulders. ",
  },
  {
    title: "Lat Pulldown",
    difficulty: "Hard",
    exhibition_date: "November 3, 2016",
    muscleGroup_id: 3,
    filename: "lat-pulldown.png",
    motion_file: "lat-pulldown.gif",
    description:
      "The lat pulldown is a popular strength training exercise engaging the muscles of your upper back and arms.",
  },
  {
    title: "Bent Over Row",
    difficulty: "Moderate",
    exhibition_date: "November 3, 2016",
    muscleGroup_id: 3,
    filename: "bent-over-row.png",
    motion_file: "bent-over-row.gif",
    description:
      "The bent over row is a compound exercise primarily targets the muscles of the back, including the latissimus dorsi (lats), rhomboids, and traps.",
  },
  {
    title: "Underhand Chin-Ups",
    difficulty: "Moderate",
    exhibition_date: "November 3, 2016",
    muscleGroup_id: 3,
    filename: "underhand-chin-up.png",
    motion_file: "underhand-chin-up.gif",
    description:
      "The underhand chin-up is a variation of the traditional chin-up exercise targeting the muscles of the back, biceps, and shoulders.",
  },
  {
    title: "Dumbbell Row",
    difficulty: "Moderate",
    exhibition_date: "November 3, 2016",
    muscleGroup_id: 3,
    filename: "dumbbell-row.png",
    motion_file: "dumbbell-row.gif",
    description:
      "Dumbbell rows are a compound exercise where you bend forward, support your body with one hand on a bench, and pull a dumbbell up to your side, targeting the back muscles, particularly the lats and rhomboids.",
  },
  {
    title: "Hyperextensions",
    difficulty: "Easy",
    exhibition_date: "November 3, 2016",
    muscleGroup_id: 3,
    filename: "hyperextensions.png",
    motion_file: "hyperextensions.gif",
    description:
      "Hyperextensions, also known as back extensions, are an exercise where you lie face down on a hyperextension bench or stability ball and lift your upper body upward, targeting the muscles of the lower back.",
  },
  {
    title: "Inverted Row",
    difficulty: "Easy",
    exhibition_date: "November 3, 2016",
    muscleGroup_id: 3,
    filename: "inverted-row.jpg",
    motion_file: "inverted-row.gif",
    description:
      "Inverted rows, also known as bodyweight rows or horizontal pulls, are an exercise where you lie under a bar or suspension trainer and pull your chest up towards the bar, targeting the back muscles.",
  },
  {
    title: "One Arm Dumbbell Row",
    difficulty: "Moderate",
    exhibition_date: "November 3, 2016",
    muscleGroup_id: 3,
    filename: "one-arm-dumbbell-row.png",
    motion_file: "one-arm-dumbbell-row.gif",
    description:
      "One-arm dumbbell rows are an exercise where you stabilize your body with one hand on a bench while pulling a dumbbell up to your side with the opposite arm, targeting the back muscles, especially the lats and rhomboids.",
  },
  {
    title: "Underhand Bent Over Row",
    difficulty: "Moderate",
    exhibition_date: "November 3, 2016",
    muscleGroup_id: 3,
    filename: "underhand-bent-over-row.jpg",
    motion_file: "underhand-bent-over-row.gif",
    description:
      "Underhand bent over rows are a variation of the bent over row exercise where you grip the barbell or dumbbells with an underhand grip, bend forward, and row the weight towards your lower chest, targeting the upper back and biceps.",
  },
  {
    title: "Dumbbell Pull-Over",
    difficulty: "Moderate",
    exhibition_date: "July 4, 2020",
    muscleGroup_id: 3,
    filename: "dumbbell-pullover.jpg",
    motion_file: "dumbbell-pullover.gif",
    description:
      "Dumbbell pull-overs are an exercise where you lie on a bench, hold a dumbbell above your chest, and lower it behind your head in a controlled motion, engaging the chest, back, and shoulder muscles.",
  },
  {
    title: "Tricep Kickback",
    difficulty: "Easy",
    exhibition_date: "December 24, 2020",
    muscleGroup_id: 4,
    filename: "tricep-kickback.png",
    motion_file: "tricep-kickback.gif",
    description:
      "Tricep kickbacks are an isolation exercise primarily targets the triceps brachii, the muscles on the back of the upper arm.",
  },
  {
    title: "Barbell Curl",
    difficulty: "Easy",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 4,
    filename: "barbell-curl.png",
    motion_file: "barbell-curl.gif",
    description:
      "The barbell curl primarily targets the biceps brachii, the muscles on the front of the upper arm.",
  },
  {
    title: "Shoulder Press",
    difficulty: "Moderate",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 4,
    filename: "shoulder-press.jpg",
    motion_file: "shoulder-press.gif",
    description:
      "The shoulder press, also referred to as the military press, is an exercise where you press a weight overhead from shoulder level, targeting the deltoid muscles and enhancing upper body strength, stability, and shoulder mobility.",
  },
  {
    title: "Hammer Curl",
    difficulty: "Easy",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 4,
    filename: "hammer-curl.png",
    motion_file: "hammer-curl.gif",
    description:
      "The hammer curl is an arm exercise where you hold dumbbells with a neutral grip primarily targets the brachialis and brachioradialis muscles of the forearms, as well as the biceps.",
  },
  {
    title: "Tricep Push-Down",
    difficulty: "Easy",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 4,
    filename: "cable-tricep.jpg",
    motion_file: "cable-tricep.gif",
    description:
      "The tricep pushdown is an isolation exercise primarily targets the triceps brachii, the muscles on the back of the upper arm. ",
  },
  {
    title: "Concentration Curls",
    difficulty: "Moderate",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 4,
    filename: "concentration-curls.png",
    motion_file: "concentration-curls.gif",
    description:
      "Concentration curls are a bicep exercise performed while seated, where you curl a dumbbell with one arm while keeping the elbow resting against the inner thigh, effectively isolating and targeting the biceps for enhanced strength and definition.",
  },
  {
    title: "Incline Bicep Curls",
    difficulty: "Moderate",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 4,
    filename: "incline-bicep-curl.jpg",
    motion_file: "incline-bicep-curl.gif",
    description:
      "Incline bicep curls are a variation of the bicep curl exercise where you sit on an incline bench and perform curls, targeting the biceps muscles from a different angle to enhance muscle development and strength in the upper arms.",
  },
  {
    title: "Lateral Raise",
    difficulty: "Difficult",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 4,
    filename: "lateral-raise.png",
    motion_file: "lateral-raise.gif",
    description:
      "Lateral raises are a shoulder exercise where you hold dumbbells by your sides and lift them out to the sides, parallel to the ground, targeting the deltoid muscles and improving shoulder strength and definition.",
  },
  {
    title: "Dips",
    difficulty: "Moderate",
    exhibition_date: "July 4, 2020",
    muscleGroup_id: 4,
    filename: "dips.png",
    motion_file: "dips.gif",
    description:
      "Bench dips are a bodyweight exercise performed with your hands on a bench behind you, lowering your body by bending your arms, and then pushing back up, primarily targeting the triceps while improving upper body strength and tone.",
  },
    {
    title: "Overhead Press",
    difficulty: "Difficult",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 4,
    filename: "overhead-press.jpg",
    motion_file: "overhead-press.gif",
    description:
      "The overhead press, also known as the shoulder press, is an exercise where you push a weight upward from shoulder level to an overhead position, primarily targeting the deltoid muscles while improving upper body strength and stability.",
  },
  {
    title: "Decline Crunch",
    difficulty: "Easy",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 5,
    filename: "decline-crunch.png",
    motion_file: "decline-crunch.gif",
    description:
      "The decline crunch is an abdominal exercise performed on a decline bench.This exercise primarily targets the rectus abdominis.",
  },
  {
    title: "Sit-Ups",
    difficulty: "Easy",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 5,
    filename: "sit-up.png",
    motion_file: "sit-up.gif",
    description:
      "Sit-ups are an abdominal exercise where you start by lying on your back with knees bent primarily targeting the rectus abdominis",
  },
  {
    title: "Leg Lifts",
    difficulty: "Moderate",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 5,
    filename: "leg-lifts.png",
    motion_file: "leg-lifts.gif",
    description:
      "Leg lifts are a core exercise primarily targeting the lower abdominal muscles, including the rectus abdominis and the hip flexors. ",
  },
  {
    title: "Ab Wheel",
    difficulty: "Hard",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 5,
    filename: "ab-wheel.png",
    motion_file: "ab-wheel.gif",
    description:
      "This exercise primarily targets the core muscles, including the rectus abdominis, obliques, and transverse abdominis.",
  },
  {
    title: "Air Bike",
    difficulty: "Moderate",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 5,
    filename: "air-bike.jpg",
    motion_file: "air-bike.gif",
    description:
      "The air bike exercise is a core and cardiovascular exercise where you lie on your back, pedal your legs in a cycling motion, and perform alternating elbow-to-knee crunches, engaging the abdominal muscles and promoting calorie burning and core strength.",
  },
  {
    title: "Bird Dog",
    difficulty: "Easy",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 5,
    filename: "bird-dog.jpg",
    motion_file: "bird-dog.gif",
    description:
      "The bird dog exercise is a core-strengthening exercise where you start on your hands and knees, extending one arm forward and the opposite leg backward while maintaining a stable spine, targeting the core muscles and promoting stability and balance.",
  },
  {
    title: "Dead Bug",
    difficulty: "Easy",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 5,
    filename: "dead-bug.jpg",
    motion_file: "dead-bug.gif",
    description:
      "The dead bug exercise is a core exercise where you lie on your back, extend your arms and legs towards the ceiling, and then lower opposite limbs while maintaining a stable core, engaging the abdominal muscles and promoting core stability and control.",
  },
  {
    title: "Flutter Kicks",
    difficulty: "Easy",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 5,
    filename: "flutter-kicks.jpg",
    motion_file: "flutter-kicks.gif",
    description:
      "Flutter kicks are a core exercise performed by lying on your back, lifting your legs off the ground, and making small, rapid up and down kicks, targeting the lower abdominal muscles and hip flexors while improving core strength and endurance.",
  },
  {
    title: "Half Wipers",
    difficulty: "Moderate",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 5,
    filename: "half-wipers.jpg",
    motion_file: "half-wipers.gif",
    description:
      "Wipers are an advanced core exercise where you lie on your back, lift your legs up, and move them from side to side in a controlled motion, engaging the oblique muscles and promoting core stability and rotational strength.",
  },
  {
    title: "Oblique Crunches",
    difficulty: "Moderate",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 5,
    filename: "oblique-crunches.png",
    motion_file: "oblique-crunches.gif",
    description:
      "Oblique crunches are a core exercise where you lie on your back, cross one ankle over the opposite knee, and crunch upwards, aiming to bring the opposite elbow towards the knee, targeting the oblique muscles.",
  },
  {
    title: "Russian Twist",
    difficulty: "Moderate",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 5,
    filename: "russian-twist.jpg",
    motion_file: "russian-twist.gif",
    description:
      "Russian twists are a core exercise where you sit on the floor, lean back slightly, and rotate your torso from side to side, engaging the abdominal muscles and obliques while improving core stability and rotational strength.",
  },
];

const seedExercises = () => Exercise.bulkCreate(exerciseData);

module.exports = seedExercises;
