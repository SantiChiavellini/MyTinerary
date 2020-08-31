const Activity = require('../models/Activity')

const activitiesController = {
    getActivities: async (req, res) => {
       const list = await Activity.find()
        
       res.json({
           succes: true,
            Itineraries: list
       })
    },
    
    loadActivity: async (req, res) => {
        const {activities, iditinerary} = req.body

        const newActivity = new Activity({
            activities,
            iditinerary
        })

        const loadActivity = await newActivity.save()
        if(loadActivity._id !== null) {
            res.json({
                succes: true,
                message: 'Activity loaded succefully!'
            })
        }  else {
            res.json({
                succes: false,
                message: 'Failed loading activity'
            })
        }
    }

}

module.exports = activitiesController

