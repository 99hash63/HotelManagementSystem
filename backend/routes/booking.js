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















//Fron Office Manager

//view all bookings request 
router.route("/ViewBookings").get((req,res)=>{
    Booking.find().then((BookingRequsets)=>{
        res.json(BookingRequsets);
    }).catch((err)=>{
        console.log(err);
    })
})





//View all Up comming Bookings
router.route("/ViewHistry").get((req,res)=>{
    Booking.find({bookingState : "not active"}).then((BookingHistry)=>{
        res.json(BookingHistry);
    }).catch((err)=>{
        console.log(err);
    })
})


// //View all Active Bookigs
// router.route("/ViewActive").get((req,res)=>{
//     Booking.find().then((BookingHistry)=>{
//         res.json(BookingHistry);
//     }).catch((err)=>{
//         console.log(err);
//     })
// })



// //Accept Booking Requsets
// router.route("/update/:id").put((req,res)=>{
//     var id = req.params.id;
//     const {bookingId, fName, lName, address, NIC, email, promoCode, travelAgent, checkInDate, checkOutDate, noOfAdults, noOfChildren, package, otherAccomodations, nationality, passportNo, roomAllocation, price, bookingState} = req.body;

//         const AcceptReq = ({
//             bookingId,
//             fName,
//             lName,
//             address, 
//             NIC, 
//             email,
//             promoCode,
//             travelAgent, 
//             checkInDate, 
//             checkOutDate, 
//             noOfAdults,
//             noOfChildren,
//             package, 
//             otherAccomodations, 
//             nationality, 
//             passportNo, 
//             roomAllocation,
//             price,
//             bookingState
//     })


//     Booking.findByIdAndUpdate(id,AcceptReq).then(()=>{
//         res.status(200).send({status:"Agent Add Success"})
//     }).catch((err)=>{
//         res.status(500).send({status:"Error"})
//     })

// })


//find special Customer
router.route("/find/:id").get((req,res)=>{
     var id = req.params.id;

     Booking.findById(id).then((agent)=>{    
            res.json(agent);
    }).catch((err)=>{
        res.json(err);
    })
})


//Delete Requestd
router.route("/delete/:id").delete((req,res)=>{

    var num = req.params.id;
    console.log(num);
    Booking.findByIdAndDelete(num).then(()=>{
        res.status(200).send({status:"Agent Add Success"})
    }).catch((err)=>{
        res.status(500).send({status:"Error"})
    }) 
})



//find customer using 
router.route("/findOne/:id").get((req,res)=>{
    var mail = req.params.id;
    console.log(mail);
    
    Booking.find({email : mail}).then((cust)=>{
        res.json(cust);
        console.log(cust);
    }).catch((err)=>{
        res.json(err);
    })
    
}) 

module.exports = router;