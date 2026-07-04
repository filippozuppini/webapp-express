const express = require("express");
const router = express.Router();

// Index Route
router.get('/', (req,res) => {
    res.send('Fetching all movies')
})

//Show Route
router.get('/:id', (req,res) => {
    const id = parseInt(req.params);
    res.send(`Fetching movies by ID: ${ID}`);
})

module.exports = router;