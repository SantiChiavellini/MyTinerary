const City = require('../models/City')

const citiesController= {
    getCities: async (req, res) => {
        // Cuando llega el pedido: ¿Qué tiene que hacer?
        const list = await City.find()
        // Pedirle a la base de datos la list de invitados
        // Devolverle al front end la list de invitados que me dió la base de datos
        res.json({
            success: true,
            cities: list
        })
    },

    loadCity: async (req, res) => {
        // Abre la petición que me llega de frontend y extraigo la información del nuevo invitado (detruscturación)
        const {city, country, image} = req.body
        // Validación (normalmente se hace en un MiddleWare que confirma los datos en una etapa previa)
        // Le pide a la base de datos que guarde la nueva información
        const newCity = new City({
            city:city,
            country:country,
            image:image,
        })
        const loadCity = await newCity.save()
        if (loadCity._id !== null) {
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
    },

    getCity: async (req, res) => {
        const requiredCity = await City.findOne({_id:req.params.id})
            console.log(requiredCity)
            res.json({
                 city: requiredCity
            })
    },

}

module.exports = citiesController