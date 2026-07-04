require('dotenv').config();
const express = require('express');
const app = express()
const port = process.env.API_SERVER_PORT || 3000;
const connection = require("./database/connection.js");



app.use(express.static("public"));


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// Index Route
app.get('/movies', (req,res) => {
    res.send('Fetching all movies')
})

//Show Route
app.get('/movies/:id', (req,res) => {
    const id = parseInt(req.params);
    res.send(`Fetching movies by ID: ${ID}`);
})

