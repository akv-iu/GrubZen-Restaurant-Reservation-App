const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://architapalkar15:NwQHZhYBcmN5cp9O@cluster0.dc2fmej.mongodb.net/mern-rooms'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose