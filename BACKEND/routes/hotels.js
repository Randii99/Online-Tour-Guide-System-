const router = require("express").Router();
const { aggregate } = require("../models/hotel");
let Hotel = require("../models/hotel");

router.route("/add").post((req, res)=>{
    
    const name= req.body.name;
    const email = req.body.email;
    const phone_number = Number(req.body.phone_number);
    const district = req.body.district;
    const price = req.body.price;
    const no_of_rooms = Number(req.body.no_of_rooms);

    const newHotel = new Hotel({
        name,
        email,
        phone_number ,
        district,
        price,
        no_of_rooms

    })

    newHotel.save().then(()=>{
        res.json("hotel Added")
    }).catch((err)=>{
        console.log(err);

    })
})
// retrieve from database to the admin
router.get('/all',(req,res)=>{

    Hotel.find().exec((err,hotels)=>{
        if(err){
      return res.status(400).json({
       error:err
    });
  }
  
      return res.status(200).json({
  
          success:true,
          existingHotels:hotels
  
  
      });
  
  
    });
  
  
  
  });
//retrieve by id in the update form
router.route("/get/:id").get(async(req,res)=>{
    const fb = await Hotel.findById(req.params.id);

  if (fb) {
    res.json(fb);
  } else {
    res.status(404).json({ message: "Hotel not found" });
  }
})


//Update
router.route("/update/:id").patch(async(req,res)=>{

    const fb = await Hotel.findById(req.params.id);

  if (fb) {
    fb.name = req.body.name || fb.name;
    fb.email = req.body.email ||  fb.email;
    fb.phone_number = req.body.phone_number || fb.phone_number;
    fb.district = req.body.district || fb.district;
    fb.price = req.body.price || fb.price;
    fb.no_of_rooms = req.body.no_of_rooms || fb.no_of_rooms;
   
    const updateHotel = await fb.save();

    res.json({
        name: updateHotel.name,
        email: updateHotel.email,
        phone_number: updateHotel.phone_number,
        district: updateHotel.district,
        price: updateHotel.price,
        no_of_rooms: updateHotel.no_of_rooms,
        
    });
  } else {
    res.status(404);
    
    throw new Error("Can't Update Hotel Details");
  }


})
// delete 
    router.route("/delete/:id").delete(async(req , res)=>{
        let hotelId = req.params.id;

     await Hotel.findByIdAndDelete(hotelId)
        .then(()=>{
            res.status(200).send({status: "hotel deleted"})

        }).catch(()=>{
            console.log(err.message);
            res.status(500).send({status: "Error with delete hotel", error: err.message });
        })
    })
module.exports = router;