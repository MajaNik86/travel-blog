const express = require('express');
const router = express.Router();
const resData = require('../util/destination-data')

router.get("/destinations", function (req, res) {
    const storedDestinations = resData.getStoredDestinations();

    res.render("destinations", {
        numOfDestinations: storedDestinations.length,
        destinations: storedDestinations,
    });
});

router.get("/destinations/:id", function (req, res) {
    const destinationId = req.params.id;
    const storedDestinations = resData.getStoredDestinations();
    for (const destination of storedDestinations) {
        if (destination.id === destinationId) {
            return res.render('destination-detail', { destination: destination })
        }
    }

    res.render('404')

})

router.get("/recommend", function (req, res) {
    res.render("recommend");
});

router.post("/recommend", function (req, res) {
    const destination = req.body;
    destination.id = uuid.v4();


    const destinations = resData.getStoredDestinations();

    destinations.push(destination);

    resData.storeDestinations(destinations);
    res.redirect("/confirm");
});

router.get("/confirm", function (req, res) {
    res.render("confirm");
});

module.exports = router;