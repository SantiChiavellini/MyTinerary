const mongoose = require('mongoose')


const itinerarieSchema = new mongoose.Schema({
    cityId: {type: mongoose.Schema.ObjectId, ref:'city', required: true},
    title: {type: String, required: true},
    profilePic: {type: String, required: true},
    rating: {type: Number, required: true}, 
    duration: {type: Number, required: true},
    price: {type: Number, required: true},
    hashtag: {type:Array, default: ['#travel', '#fun']},
    comments: {type:Array, default: []}
})

const Itinerary = mongoose.model('itinerary', itinerarieSchema)

module.exports = Itinerary 
