const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now,
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "exercise type required",
                },
                name: {
                    type: String,
                    trim: true,
                    required: "exercise name required",
                },
                duration: {
                    type: Number,
                    required: "exercise duration required",
                },
                weight: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                distance: {
                    type: Number,
                },
            },
        ]
    }, {
    toJSON: {
        virtuals: true
    }
}
);

// adds a virtual(calculated property) field to the schema
workoutSchema.virtual("totalWeight").get(function () {
    // adding the total weight of the exercises together
    return this.weight * this.reps * this.sets;
});
// adds a virtual( calculated property) field to schema
workoutSchema.virtual("totalDuration").get(function () {
    // the reduce method executes a reducer function(that you provide) on each element of the array, resulting in single output value.
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});
// mongoose is using the schema created and using the workoutschema to populate the model. Afterwards it's being exported.
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
