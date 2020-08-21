//   * View multiple the combined weight of multiple exercises on the `stats` page.

const db = require("../models");
const Workout = db.Workout;

module.exports = function (app) {
    // add new workout
    app.post("/api/workouts", ({ body }, res) => {
        const workout = new Workout(body)

        // workout.setTotalWeight();
        // console.log(workout.setTotalWeight);
        // workout.totalDuration();

        Workout.create(workout).then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });

    });

    // // update workout
    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.body)
        Workout.findByIdAndUpdate(req.params.id,
            {
                $push: {
                    exercises: req.body
                }
            },
            { new: true, runValidators: true }
        ).then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch((err) => {
            res.json(err);
        });
    });

    // get the workouts
    app.get("/api/workouts", (req, res) => {
        Workout.find({}).then((dbWorkout) => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    })
    // get the stats workouts
    app.get("/api/workouts/range", (req, res) => {
        Workout.find({}).then((dbWorkout) => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    })

};


