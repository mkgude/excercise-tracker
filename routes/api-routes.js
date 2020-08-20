//   * View multiple the combined weight of multiple exercises on the `stats` page.

const db = require("../models");
const Workout = db.Workout;

module.exports = function (app) {
    // add new workout
    app.post("/api/workouts", ({ body }, res) => {
        Workout.create(body).then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });

    // // update workout
    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.body)
        Workout.findByIdAndUpdate(req.params.id, {
            $push: {
                exercises: req.body
            }
        }).then((dbWorkout) => {
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

};


