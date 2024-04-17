const express = require("express");
const router = express. Router();

const Restaurant = require('../models/restaurant')


router.get ("/getallrestaurants", async(req, res) => {
    try {
        const restaurants = await Restaurant.find({})
        res.send(restaurants)
    } catch (error) {
        return res. status(400).json({ message: error });
    }
}) ;
module. exports = router; 