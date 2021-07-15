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
// Update workouts by MongoDB _id value and update the exercsise body
router.put("/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        { _id: req.params.id }, { exercises: req.body }
    ).then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;
