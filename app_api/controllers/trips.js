const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

/**
 * POST /api/trips
 */
const tripsAddTrip = async (req, res, next) => {
  try {
    const trip = await Trip.create({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,   
      start: req.body.start,     
      resort: req.body.resort,
      perPerson: req.body.perPerson, 
      image: req.body.image,
      description: req.body.description
    });
    return res.status(201).json(trip);
  } catch (err) {
    err.status = 400;
    return next(err);
  }
};


/**
 * GET /api/trips/:tripCode
 */
const tripsFindByCode = async (req, res, next) => {
  try {
    const trip = await Trip.findOne({ code: req.params.tripCode }).exec();
    if (!trip) return res.status(404).json({ message: 'Trip not found' });
    return res.status(200).json(trip);
  } catch (err) {
    err.status = 500;
    return next(err);
  }
};

/**
 * GET /api/trips
 */
const tripsList = async (req, res, next) => {
  try {
    const trips = await Trip.find().exec();
    return res.status(200).json(trips);
  } catch (err) {
    err.status = 500;
    return next(err);
  }
};

// and JSON message to the requesting client 
const tripsUpdateTrip = async(req, res) => { 
 
    // Uncomment for debugging 
    console.log(req.params); 
    console.log(req.body); 
 
    const q = await Model 
        .findOneAndUpdate( 
            { 'code' : req.params.tripCode }, 
            { 
                code: req.body.code, 
                name: req.body.name, 
                length: req.body.length, 
                start: req.body.start, 
                resort: req.body.resort, 
                perPerson: req.body.perPerson, 
                image: req.body.image, 
                description: req.body.description 
            }  
        ) 
        .exec(); 
         
        if(!q) 
        { // Database returned no data 
            return res 
                .status(400) 
                .json(err); 
        } else { // Return resulting updated trip 
            return res 
                .status(201) 
                .json(q); 
        }      
        console.log(q);
}; 

module.exports = { tripsAddTrip, tripsFindByCode, tripsList, tripsUpdateTrip};

