const mongoose = require('mongoose');
const Model = mongoose.model('trips');

//Get trips
const tripsList = async (req, res) => {
    Model
        .find({ 'code' : req.params.tripCode})
        .exec((err, trips) => {
            if (!trips) {
                return res
                    .status(404)
                    .json({ "message": "trips not found" });
            }else if (err){
                return res.status(404)
                .json(err);
            }else {
                return res
                .status(200)
                .json(trips);
            }
        });
};

//get: /trips/:tripCode

const tripsFindCode = async (req, res) => {
    Model
        .find({})
        .exec((err, trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .json({ "message": "trip not found" });
            }else if (err){
                return res.status(404)
                .json(err);
            }else {
                return res
                .status(200)
                .json(trip);
            }
        });
};

module.exports = {
    tripsList,
    tripsFindCode
};