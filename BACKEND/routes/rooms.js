const router = require("express").Router();
const { aggregate } = require("../models/room");
let Room = require("../models/room");

router.route("/insert").post((req, res)=>{
    
    const checkIn= req.body.checkIn;
    const checkOut = req.body.checkOut;
    const location = req.body.location;
    const no_of_guests = Number(req.body.no_of_guests);
    const no_of_rooms = Number(req.body.no_of_rooms);
    const roomType = req.body.roomType;

    const newRoom = new Room({
        checkIn,
        checkOut,
        location,
        no_of_guests ,
        no_of_rooms,
        roomType

    })

    newRoom.save().then(()=>{
        res.json("Room Added")
    }).catch((err)=>{
        console.log(err);

    })
})

//retreive admin user details
router.get('/allhotels',(req,res)=>{

    Room.find().exec((err,rooms)=>{
        if(err){
      return res.status(400).json({
       error:err
    });
}
 return res.status(200).json({

          success:true,
          existingRooms:rooms
        });
    });
});
// delete 
    router.route("/ /:id").delete(async(req , res)=>{
        let roomId = req.params.id;

     await Room.findByIdAndDelete(roomId)
        .then(()=>{
            res.status(200).send({status: "hotel deleted"})

        }).catch(()=>{
            console.log(err.message);
            res.status(500).send({status: "Error with delete hotel", error: err.message });
        })
    })
  
module.exports = router;