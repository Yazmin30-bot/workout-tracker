const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "Name is required"
            },
            type: {
                type: String,
                trim: true,
                required: "Type is required"
            },
            weight: {
                type: Number,
                required: true
            },
            sets: {
                type: Number,
                required: true
            },
            reps: {
                type: Number,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },        
        },
    ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;