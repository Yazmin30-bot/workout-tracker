const db = require('../../models');
const router = require('express').Router();
//Get info for the workouts page
router.get("/", (req, res) => {
    db.Workout.find()
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})
// Get info for the range page
router.get("/range", (req, res) => {
    db.Workout.find()
        .then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });
});
// Create a new completed workouts
router.post("/", (req, res) => {
    db.Workout.create(req.body)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });
});
// Update workouts adding the new workouts
router.put("/:id", (req, res) => {
    const id = req.params.id;
    let workoutExercises = [];
    db.Workout.find({ _id: id })
        .then(dbWorkout => {
            workoutExercises = dbWorkout[0].exercises;
            res.json(workoutExercises);
            let exercises = [...workoutExercises, req.body];
            db.Workout.findByIdAndUpdate(id, { exercises: exercises }, function (err, doc) {
                if (err) {
                    console.log(err)
                }
            })
        })
        .catch(err => {
            res.json(err);
        });

});

module.exports = router;
