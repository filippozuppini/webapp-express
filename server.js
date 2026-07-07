require('dotenv').config();
const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.API_SERVER_PORT || 3000;
const connection = require("./database/connection.js");
const moviesRouter = require("./routes/movies");
const serverError = require("./middlewares/serverError");
const notFound = require("./middlewares/notFound");



app.use(express.static("public"));

app.use(cors({ origin: 'http://localhost:5173'}));

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})


// Movies routes
app.use('/movies', moviesRouter);

// 505
app.use(serverError);

//404
app.use(notFound);



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
