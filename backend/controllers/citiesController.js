const City = require('../models/City')


const citiesController= {
    listarCiudades: async (req, res) => {
        // Cuando llega el pedido: ¿Qué tiene que hacer?
        const lista = await City.find()

        // Pedirle a la base de datos la lista de invitados
        // Devolverle al front end la lista de invitados que me dió la base de datos
        res.json({
            success: true,
            cities: lista
        })
    },

    cargarCiudad: async (req, res) => {
        // Abre la petición que me llega de frontend y extraigo la información del nuevo invitado (detruscturación)
        const {city, country, image} = req.body
        // Validación (normalmente se hace en un MiddleWare que confirma los datos en una etapa previa)

        // Le pide a la base de datos que guarde la nueva información
        const newCity = new City({
            city:city,
            country:country,
            image:image,
        })

        const guardarCiudad = await newCity.save()
        console.log(guardarCiudad)

        if (guardarCiudad._id !== null) {
            res.json({
                success: true,
                message: 'City loaded successfully!'
            })
        }   else {
            res.json({
                success: false,
                message: 'City loading failed'
            })
        }

        
        
    }
}

module.exports = citiesController