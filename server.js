const express = require("express");

const app = express();

const dbConfig = require('./db')

const restaurantsRoute = require('./routes/restaurantsRoute')
const usersRoute = require('./routes/usersRoute')

app.use('/api/restaurants' , restaurantsRoute)
app.use('/api/users' , usersRoute)


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Node server started`));