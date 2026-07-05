require('dotenv').config();
const express = require('express');
const app = express()
const port = process.env.API_SERVER_PORT || 3000;
const connection = require("./database/connection.js");
const moviesRouter = require("./routes/movies");



app.use(express.static("public"));
app.use(express.json());


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// Movies routes
app.use('/movies', moviesRouter);

