const express = require('express')
const rutas = express.Router()
const citiesController = require('../controllers/citiesController')

rutas.route('/cities')
.get(citiesController.listarCiudades)
.post(citiesController.cargarCiudad)


module.exports = rutas