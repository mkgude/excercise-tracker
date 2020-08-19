//   * View multiple the combined weight of multiple exercises on the `stats` page.

const db = require("../models");
const Workout = require("../models/workout.js");

module.exports = function (app) {
    // get the workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then((dbWorkout) => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
    })
    // add new workout
    // app.post("/api/workout", ({ body }, res) => {
    //     const workout = new Workout(body);
    //     db.Workout.create(workout)
    //         .then(dbWorkout => {

    //             res.json(dbWorkout);
    //         })
    //         .catch(err => {

    //             res.json(err);
    //         });
    // });

    // // update workout
    // app.put("/api/workouts/:id", (req, res) => {
    //     db.Workout.update({ _id: mongojs.ObjectId(req.params.id) }, {
    //         $set: {
    //             title: req.body.title,
    //             note: req.body.note,
    //             modified: Date.now()
    //         }
    //     },
    //         (error, data) => {
    //             if (error) {
    //                 res.send(error);
    //             } else {
    //                 res.send(data);
    //             }
    //         }
    //     );
    // });
    // add new workout
};


