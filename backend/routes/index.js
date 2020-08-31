const express = require('express')
const rutas = express.Router()
const citiesController = require('../controllers/citiesController')
const itinerariesController= require('../controllers/itinerariesController')

rutas.route('/cities')
.get(citiesController.getCities)
.post(citiesController.loadCity)

rutas.route('/cities/:id')
.get(citiesController.getCity)


rutas.route('/itineraries')
.get(itinerariesController.getItineraries)
.post(itinerariesController.loadItinerary)


rutas.route('/itineraries/:id')
.get(itinerariesController.getSpecificItineraries)
module.exports = rutas