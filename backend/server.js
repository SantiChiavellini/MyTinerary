const express = require('express')
const cors = require('cors')
const rutas = require('./routes/index')

// Ejecutar el dotenv
require('dotenv').config()
// Ejecutar conexión a la base de datos
require('./config/db')

// Crear el elemento "SERVIDOR"
const servidor = express()

//MiddleWare
servidor.use(cors())
servidor.use(express.json())

//Rutas
servidor.use('/api', rutas)

servidor.listen(4000, () => console.log("App listening on port 4000"))


