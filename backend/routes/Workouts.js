const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getOneWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const router = express.Router()
const Workout = require('../model/WorkoutModel');

// get all workout
router.get('/', getWorkouts)


// get single workout
router.get('/:id', getOneWorkout)

//post a new workout
router.post('/', createWorkout)

// delete a workout
router.delete('/:id', deleteWorkout)


// update a workout 
router.patch('/:id', updateWorkout)

module.exports = router