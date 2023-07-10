const { Exercise } = require("../models");

const exerciseData = [
  {
    title: "Barbell Bench Press",
    difficulty: "Moderate",
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
    difficulty: "Moderate",
    exhibition_date: "July 4, 2020",
    muscleGroup_id: 1,
    filename: "cable-crossover.png",
    motion_file: "cable-crossover.gif",
    description:
      "The cable crossover primarily targets the muscles of the chest, shoulders, and arms.",
  },
  {
    title: "Chest Dips",
    difficulty: "Hard",
    exhibition_date: "July 4, 2020",
    muscleGroup_id: 1,
    filename: "chest-dips.jpg",
    motion_file: "chest-dips.gif",
    description:
      "Chest dips are a bodyweight exercise where you suspend yourself on parallel bars, lowering your body down and then pushing up, primarily targeting the chest, triceps, and shoulders while improving upper body strength and muscular development.",
  },
  {
    title: "Decline Cable Fly",
    difficulty: "Moderate",
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
    title: "Bosu Ball Push-Ups",
    difficulty: "Hard",
    exhibition_date: "July 4, 2020",
    muscleGroup_id: 1,
    filename: "bosu-ball-push-ups.png",
    motion_file: "bosu-ball-push-ups.gif",
    description:
      "Bosu ball pushups are a variation of pushups performed with the hands on a Bosu ball, challenging stability and engaging core muscles.",
  },
  {
    title: "Pec Fly Machine",
    difficulty: "Moderate",
    exhibition_date: "July 4, 2020",
    muscleGroup_id: 1,
    filename: "pec-fly-machine.png",
    motion_file: "pec-fly-machine.gif",
    description:
      "The pec fly machine is a gym equipment that targets the chest muscles by simulating a fly motion, providing resistance and isolation for an effective chest workout.",
  },
  {
    title: "Wide Arm Push-Ups",
    difficulty: "Moderate",
    exhibition_date: "July 4, 2020",
    muscleGroup_id: 1,
    filename: "wide-arm-push-ups.png",
    motion_file: "wide-arm-push-ups.gif",
    description:
      "Wide arm pushups are a variation of pushups where the hands are placed wider than shoulder-width apart, targeting the chest, shoulders, and triceps with an emphasis on shoulder stability.",
  },
  {
    title: "Squats",
    difficulty: "Hard",
    exhibition_date: "June 10, 2019",
    muscleGroup_id: 2,
    filename: "squat.png",
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
    difficulty: "Moderate",
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
    title: "Bulgarian Split Squat",
    difficulty: "Moderate",
    exhibition_date: "June 10, 2019",
    muscleGroup_id: 2,
    filename: "split-squat.jpg",
    motion_file: "split-squat.gif",
    description:
      "Bulgarian split squats are a single-leg exercise where you place the back foot on an elevated surface and perform a deep lunge motion, targeting the leg muscles, particularly the quadriceps and glutes, while improving balance and lower body strength.",
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
    title: "Barbell Front Squat",
    difficulty: "Moderate",
    exhibition_date: "June 10, 2019",
    muscleGroup_id: 2,
    filename: "barbell-front-squat.png",
    motion_file: "barbell-front-squat.gif",
    description:
      "The barbell front squat is an exercise where the barbell is placed in front of the body on the front shoulders, challenging the lower body muscles, particularly the quadriceps, while also engaging the core and upper back for stability.",
  },
  {
    title: "Machine Leg Press",
    difficulty: "Moderate",
    exhibition_date: "June 10, 2019",
    muscleGroup_id: 2,
    filename: "leg-press-machine.png",
    motion_file: "leg-press-machine.gif",
    description:
      "The machine leg press is a gym equipment that targets the lower body, particularly the quadriceps, hamstrings, and glutes, by simulating the motion of pushing a weighted platform with the legs.",
  },
  {
    title: "Machine Leg Extension",
    difficulty: "Moderate",
    exhibition_date: "June 10, 2019",
    muscleGroup_id: 2,
    filename: "leg-extension-machine.png",
    motion_file: "leg-extension-machine.gif",
    description:
      "The machine leg extension is a gym equipment that specifically targets the quadriceps muscles by allowing you to extend your legs against resistance in a seated position.",
  },
  {
    title: "Barbell Overhead Squat",
    difficulty: "Moderate",
    exhibition_date: "June 10, 2019",
    muscleGroup_id: 2,
    filename: "barbell-overhead-squat.png",
    motion_file: "barbell-overhead-squat.gif",
    description:
      "The barbell overhead squat is an advanced exercise where a barbell is held overhead while performing a full squat, challenging the entire body's strength, mobility, and stability.",
  },
  {
    title: "Mountain Climbers",
    difficulty: "Easy",
    exhibition_date: "June 10, 2019",
    muscleGroup_id: 2,
    filename: "mountain-climbers.png",
    motion_file: "mountain-climbers.gif",
    description:
      "Mountain climbers are a dynamic exercise that involves alternating leg movements, resembling climbing a mountain, and they engage the core, arms, and legs for a challenging cardiovascular and full-body workout.",
  },
  {
    title: "Barbell Hip Thrusts",
    difficulty: "Easy",
    exhibition_date: "June 10, 2019",
    muscleGroup_id: 2,
    filename: "barbell-hip-thrusts.png",
    motion_file: "barbell-hip-thrusts.gif",
    description:
      "Barbell hip thrusts are a lower body exercise where the barbell is placed across the hips and thrusting the hips upward, activating and strengthening the glutes and hamstrings for improved hip extension and overall lower body strength.",
  },
  {
    title: "Goblet Squats",
    difficulty: "Moderate",
    exhibition_date: "June 10, 2019",
    muscleGroup_id: 2,
    filename: "goblet-squats.png",
    motion_file: "goblet-squats.gif",
    description:
      "Barbell hip thrusts are a highly effective exercise for targeting and strengthening the glutes, involving a horizontal movement pattern where the barbell rests on the hips and the hips are lifted off the ground.",
  },
  {
    title: "Lying Hamstring Curl",
    difficulty: "Moderate",
    exhibition_date: "June 10, 2019",
    muscleGroup_id: 2,
    filename: "lying-hamstring-curl.png",
    motion_file: "lying-hamstring-curl.gif",
    description:
      "Lying hamstring curls are a leg exercise performed lying face down on a machine, where the ankles are hooked under a padded lever and the legs are flexed against resistance to target and strengthen the hamstring muscles.",
  },
  {
    title: "Pull-Ups",
    difficulty: "Moderate",
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
    difficulty: "Hard",
    exhibition_date: "November 3, 2016",
    muscleGroup_id: 3,
    filename: "underhand-chin-up.png",
    motion_file: "underhand-chin-up.gif",
    description:
      "The underhand chin-up is a variation of the traditional chin-up exercise targeting the muscles of the back, biceps, and shoulders.",
  },
  {
    title: "Incline Dumbbell Row",
    difficulty: "Moderate",
    exhibition_date: "November 3, 2016",
    muscleGroup_id: 3,
    filename: "dumbbell-row.png",
    motion_file: "dumbbell-row.gif",
    description:
      "Incline dumbbell rows are a back exercise performed on an incline bench, where the dumbbells are rowed towards the chest, targeting the muscles of the upper back, including the rhomboids, rear deltoids, and latissimus dorsi.",
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
    title: "Seated Cable Row",
    difficulty: "Easy",
    exhibition_date: "July 4, 2020",
    muscleGroup_id: 3,
    filename: "cable-seated-row.png",
    motion_file: "cable-seated-row.gif",
    description:
      "Seated cable rows are a back exercise performed on a cable machine, where a seated position and a cable handle are used to pull the weight towards the torso, engaging the muscles of the upper back.",
  },
  {
    title: "One Arm Shotgun Row",
    difficulty: "Easy",
    exhibition_date: "July 4, 2020",
    muscleGroup_id: 3,
    filename: "shotgun-row.png",
    motion_file: "shotgun-row.gif",
    description:
      "Standing one-arm shotgun row is a back exercise performed while standing, using a handle attachment on a cable machine to pull the weight towards the torso in a rowing motion, targeting the muscles of the upper back.",
  },
  {
    title: "Cable Row Lat Pushdown",
    difficulty: "Moderate",
    exhibition_date: "July 4, 2020",
    muscleGroup_id: 3,
    filename: "cable-row-lat-pushdown.png",
    motion_file: "cable-row-lat-pushdown.gif",
    description:
      "Cable row lat pushdown, also known as the lat pulldown, is an exercise where a cable machine is used to pull a bar down towards the chest, primarily targeting the latissimus dorsi muscles for upper back and arm strength.",
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
    difficulty: "Moderate",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 4,
    filename: "barbell-curl.png",
    motion_file: "barbell-curl.gif",
    description:
      "The barbell curl primarily targets the biceps brachii, the muscles on the front of the upper arm.",
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
    title: "Barbell Preacher Curl",
    difficulty: "Moderate",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 4,
    filename: "barbell-preacher-curl.png",
    motion_file: "barbell-preacher-curl",
    description:
      "Barbell preacher curls are a bicep exercise performed on a preacher curl bench with a barbell, isolating the biceps and providing support for proper form, targeting the front upper arm muscles for increased bicep strength and development.",
  },
  {
    title: "Machine Bicep Curl",
    difficulty: "Easy",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 4,
    filename: "machine-curl-biceps.png",
    motion_file: "machine-curl-biceps.gif",
    description:
      "Machine bicep curls are a bicep exercise performed on a machine, where the arms are curled against resistance, targeting the bicep muscles for increased arm strength and definition.",
  },
  {
    title: "One Arm Cable Curl",
    difficulty: "Moderate",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 4,
    filename: "one-arm-cable-curl.png",
    motion_file: "one-arm-cable-curl.gif",
    description:
      "One-arm cable curls are a bicep exercise performed with a cable machine, where a cable attachment is pulled towards the body using one arm at a time, targeting the bicep muscles for increased arm strength and definition.",
  },
  {
    title: "Overhead Cable Tricep Extension",
    difficulty: "Hard",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 4,
    filename: "overhead-cable-tricep-extension.png",
    motion_file: "overhead-cable-tricep-extension.gif",
    description:
      "Overhead cable tricep extensions are a tricep exercise performed with a cable machine, where a cable attachment is pulled down overhead, targeting the tricep muscles for improved strength and definition in the back of the arms.",
  },  
  {
    title: "Supinated Overhead Press",
    difficulty: "Hard",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 4,
    filename: "overhead-press.jpg",
    motion_file: "overhead-press.gif",
    description:
      "Supinated overhead press, also known as the Arnold press, is an exercise where you perform an overhead press while starting with a supinated (palms facing towards you) grip and rotating the dumbbells as you press up.",
  },  
  {
    title: "Overhead Tricep Extension",
    difficulty: "Moderate",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 4,
    filename: "overhead-tricep-extension.png",
    motion_file: "overhead-tricep-extension.gif",
    description:
      "Overhead tricep extensions are a tricep exercise where a weight is held overhead and the arms are extended, targeting the tricep muscles for increased strength and definition in the back of the arms.",
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
    difficulty: "Moderate",
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
  {
    title: "Shoulder Press",
    difficulty: "Moderate",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 6,
    filename: "shoulder-press.jpg",
    motion_file: "shoulder-press.gif",
    description:
      "The shoulder press, also referred to as the military press, is an exercise where you press a weight overhead from shoulder level, targeting the deltoid muscles and enhancing upper body strength, stability, and shoulder mobility.",
  },
  {
    title: "Lateral Raise",
    difficulty: "Hard",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 6,
    filename: "lateral-raise.png",
    motion_file: "lateral-raise.gif",
    description:
      "Lateral raises are a shoulder exercise where you hold dumbbells by your sides and lift them out to the sides, parallel to the ground, targeting the deltoid muscles and improving shoulder strength and definition.",
  },
  {
    title: "Barbell Upright Rows",
    difficulty: "Moderate",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 6,
    filename: "barbell-uprightrow.png",
    motion_file: "barbell-uprightrow.gif",
    description:
      "Barbell upright rows are a shoulder exercise where a barbell is lifted in front of the body, focusing on the muscles of the shoulders, primarily the deltoids and upper traps, to improve shoulder strength and stability.",
  },
  {
    title: "Battle Ropes",
    difficulty: "Easy",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 6,
    filename: "battle-ropes.png",
    motion_file: "battle-ropes.gif",
    description:
      "Battle ropes exercises involve swinging, slamming, or waving long ropes in various patterns, providing a high-intensity full-body workout that targets the upper body, core, and cardiovascular system for improved strength, endurance, and calorie burn.",
  },
  {
    title: "Bent Over Lateral Raise",
    difficulty: "Moderate",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 6,
    filename: "bent-over-lateral-raises.png",
    motion_file: "bent-over-lateral-raises.gif",
    description:
      "Bent over lateral raises are a shoulder exercise where the body is bent forward at the hips, and the arms are lifted to the sides, targeting the lateral deltoids for improved shoulder strength and definition.",
  },
  {
    title: "Dumbbell Front Raise",
    difficulty: "Moderate",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 6,
    filename: "dumbbell-front-raises.png",
    motion_file: "dumbbell-front-raises.gif",
    description:
      "Dumbbell front raises are a shoulder exercise where the dumbbells are lifted in front of the body, targeting the front deltoids for improved shoulder strength and definition.",
  },
  {
    title: "Cable One Arm Lateral Raise",
    difficulty: "Moderate",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 6,
    filename: "cable-one-arm-lateral-raise.png",
    motion_file: "cable-one-arm-lateral-raise.gif",
    description:
      "Cable one-arm lateral raises are a shoulder exercise performed with a cable machine, where the arm is lifted to the side against resistance, targeting the medial deltoid for improved shoulder strength and definition.",
  },
  {
    title: "Dumbbell Shrugs",
    difficulty: "Easy",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 6,
    filename: "dumbbell-shrugs.png",
    motion_file: "dumbbell-shrugs.gif",
    description:
      "Dumbbell shrugs are a trap exercise where dumbbells are lifted with the shoulders, targeting the trapezius muscles for improved upper back and neck strength and stability.",
  },
  {
    title: "Plate Front Raise",
    difficulty: "Moderate",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 6,
    filename: "plate-front-raises.png",
    motion_file: "plate-front-raises.gif",
    description:
      "Plate front raises are a shoulder exercise where a weight plate is held with both hands and lifted in front of the body, targeting the front deltoids for improved shoulder strength and definition.",
  },
  {
    title: "Handstand Push-Ups",
    difficulty: "Hard",
    exhibition_date: "January 20, 2018",
    muscleGroup_id: 6,
    filename: "handstand-pushup.png",
    motion_file: "handstand-pushup.gif",
    description:
      "Handstand pushups are a challenging bodyweight exercise where the body is inverted in a handstand position, and the arms are used to lower and lift the body, primarily targeting the shoulders and triceps for upper body strength and stability.",
  },
];

const seedExercises = () => Exercise.bulkCreate(exerciseData);

module.exports = seedExercises;
