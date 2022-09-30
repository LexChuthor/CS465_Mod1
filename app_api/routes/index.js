var express = require('express');
var router = express.Router();

/* GET home page. */
const tripsController = require("../controllers/trips");

router
    .route('/trips')
    .get(tripsController.tripsList);

module.exports = router;
