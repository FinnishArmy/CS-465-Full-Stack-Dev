const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) // Single return
        .exec();

        console.log(q)

    if(!q) {
        return res
                .status(404)
                .json(err);
    } else {
        return res
                .status(200)
                .json(q);
    }
};

const tripsList = async(req, res) => {
    try {
        const trips = await Model.find().exec();
        return res.status(200).json(trips);
    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports = {
    tripsList,
    tripsFindByCode
};