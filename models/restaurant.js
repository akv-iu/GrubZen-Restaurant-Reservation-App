const { timeStamp } = require("console");
const mongoose = require("mongoose");

const restaurantschema = mongoose.Schema ({

name : {
    type: String, 
    required: true
},
ratings : {
    type: Number , 
    required: true
},
phonenumber : {
    type: Number, 
    required: true
},
imageurls : [], 
currentbookings : [],
type: {
    type: String,
    required: true
},

address: {
    type: String,
    required: true
}


},{
    timestamps : true
})

const restaurantModel = mongoose.model ('restaurant' , restaurantschema)
module.exports = restaurantModel