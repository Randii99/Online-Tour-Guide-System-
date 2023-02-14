const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const roomSchema = new Schema({
    checkIn:{
        type : String,
        required: true
        
    },
    checkOut:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    no_of_guests:{
        type: Number,
        required: true

    },
    no_of_rooms:{
        type: Number,
        required: true

    },
    roomType:{
        type: String,
        required: true

    }

})
const Room = mongoose.model("Room",roomSchema);
module.exports = Room ;