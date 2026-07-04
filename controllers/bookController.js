const { Router } = require("express");

const index = (req, res) => {
    res.send ("Fetchingall books...")
}


const show = (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Fetching book with ID: ${id}`);
}


module.exports = Router; 