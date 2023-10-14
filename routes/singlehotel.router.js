const express = require('express');
const router = express.Router();

const singleHotelController = require('../controllers/singleHotelController')

router.route("/:id")
    .get(singleHotelController)

module.exports = router;