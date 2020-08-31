const Itinerary = require('../models/Itinerary')

const itinerariesController = {
    getItineraries: async (req, res) => {
       const list = await Itinerary.find()
        
       res.json({
           succes: true,
            Itineraries: list
       })
    },

    loadItinerary: async (req, res) => {
        const {title, profilePic, rating, duration, price, cityId, hashtag, comments} = req.body

        const newItinerary = new Itinerary({
            title,
            profilePic,
            rating,
            duration,
            price,
            cityId,
            hashtag,
            comments
        })

        const loadItinerary = await newItinerary.save()
        if(loadItinerary._id !== null) {
            res.json({
                succes: true,
                message: 'Itinerary loaded succefully!'
            })
        }  else {
            res.json({
                succes: false,
                message: 'Failed loading itinerary.'
            })
        }
    },

    getSpecificItineraries: async (req, res) => {
        const specificItineraries = await Itinerary.find({cityId:req.params.id})
        
        if(specificItineraries.length !== 0) {
            res.json({
                succes:true,
                Itineraries: specificItineraries
            })
        }  else if(specificItineraries.length === 0)
            res.json({
                succes: true,
                Itineraries: []
            })
            else {
                res.json({
                    succes: false,
                    message: 'Conection failed'
                })
            }
    }

}

module.exports = itinerariesController

