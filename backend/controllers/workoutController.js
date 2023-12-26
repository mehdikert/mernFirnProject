const mongoose = require('mongoose');
const Workout = require('../model/WorkoutModel');

// get all workout

const getWorkouts = async (req, res) => {
    const workouts = await Workout.find().sort({ createAt: -1 })
    res.status(200).json(workouts)
}

// get one workout

const getOneWorkout = async (req, res) => {
    const { id } = req.params
    const workout = await Workout.findById(id)
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'no workout finded' })
    } else {
        res.status(200).json(workout)
    }
}

// create new workout
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body
    // adding doc to db
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// delete a workout

const deleteWorkout = async (req, res) => {
    const { id } = req.params
    const workout = await Workout.findOneAndDelete({ _id: id })
    if (!mongoose.Types.ObjectId.isValid(id) || !workout) {
        return res.status(404).json({ message: 'no workout finded' })
    }
    res.status(200).json({ message: "workout deleted" })
}

// update a workout

const updateWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'no workout finded' })
    }
    const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body })
    res.status(200).json(workout)
}


module.exports = { createWorkout, getWorkouts, getOneWorkout, deleteWorkout, updateWorkout }