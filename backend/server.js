const express = require('express');
const dotenv = require('dotenv').config()
const workoutRoutes = require('./routes/Workouts')
const mongoose = require('mongoose')
// creating express app
const app = express()


// connecting to database **MONGOOSE**
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connect to database');
        // server listenning to queries
        app.listen(process.env.PORT || 3000, () => {
            process.env.PORT ? console.log('Listening on port : ' + process.env.PORT) : console.log('Listening on port : 3000');
        })
    })
    .catch((error) => {
        console.log(error);
    })
// MiddleWar
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

// routes
app.use('/api/workout', workoutRoutes)

