const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const hotelSchema = new Schema({
    name:{
        type : String,
        required: true
        
    },
    email:{
        type: String,
        required: true
    },
    phone_number:{
        type: Number,
        required: true

    },
    district:{
        type: String,
        required: true

    },

    price:{
        type: String,
        required: true

    },
    no_of_rooms:{
        type: Number,
        required: true

    }

})
const Hotel = mongoose.model("Hotel",hotelSchema);
module.exports = Hotel;