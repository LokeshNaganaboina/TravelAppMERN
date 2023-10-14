const express = require('express');
const router = express.Router();

const getAllHotelController = require('../controllers/hotelController')

router.route("/")
    .get(getAllHotelController)

module.exports = router;