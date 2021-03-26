const router = require("express").Router();
let Booking = require("../models/booking");

router.route("/add").post((req,res)=>{

    const {fName, lName, address, NIC, email, promoCode, travelAgent, checkInDate, checkOutDate, noOfAdults, noOfChildren, package, otherAccomodations, nationality, passportNo, roomAllocation, price, bookingState} = req.body;

    const newBooking = new Booking({fName,lName,address, NIC,email, promoCode, travelAgent, checkInDate, checkOutDate, noOfAdults,noOfChildren,package, otherAccomodations, nationality, passportNo, roomAllocation,price,bookingState})
    newBooking.save()
    .then(()=>res.json("Booking Added"))
    .catch(err=> res.status(400).json('Error: '+ err));
});

//get relevant user's bookings
router.route('/get/:email').get(async(req, res) => {
    let email = req.params.email;
    await Booking.find({ email: email})
      .then(Booking => res.json(Booking))
      .catch(err => res.status(400).json('Error: ' + err));
  });


router.route("/update/:id").post(async(req, res) =>{        
    
    const {bookingId, fName, lName, address, NIC, email, promoCode, travelAgent, checkInDate, checkOutDate, noOfAdults, noOfChildren, package, otherAccomodations, nationality, passportNo, roomAllocation, price, bookingState} = req.body;

    const updateBooking = {
         bookingId,
         fName,
         lName,
         address, 
         NIC, 
         email,
         promoCode,
         travelAgent, 
         checkInDate, 
         checkOutDate, 
         noOfAdults,
         noOfChildren,
         package, 
         otherAccomodations, 
         nationality, 
         passportNo, 
         roomAllocation,
         price,
         bookingState
    }
    let id = req.params.id;
    const update = await Booking.findByIdAndUpdate(id , updateBooking).then(()=>{ 
        res.json({status: "Booking Updated"})
    }).catch((err)=>{
        console.log(err);
        res.json({status: "Error with updating data"});
    })
})


router.route("/delete/:id").delete(async(req,res)=>{
    let Id = req.params.id;

    await Booking.findByIdAndDelete(Id).then(()=>{
        res.status(200).send({status: "Booking deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "error with delete user", error: err.message});
    })
})




module.exports = router;