const express = require("express");

const app = express();

const dbConfig = require('./db')

const restaurantsRoute = require('./routes/restaurantsRoute')
app.use('/api/restaurants' , restaurantsRoute)


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Node server started`));