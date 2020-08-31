const mongoose = require('mongoose')


const activitieSchema = new mongoose.Schema({
    activities: {type: Array, required: true},
    iditinerary: {type: Array, required: true}
})

const Activity = mongoose.model('activity', activitieSchema)

module.exports = Activity
