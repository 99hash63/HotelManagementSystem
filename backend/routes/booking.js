const router = require("express").Router();
let Booking = require("../models/booking");
const auth = require("../middleware/auth");

//CUSTOMER

// add unreg user booking
router.post("/addU", async(req,res)=>{
    try{
        const {fName, lName, address, NIC, email, promoCode, travelAgent, checkInDate, checkOutDate, noOfAdults, noOfChildren, otherAccomodations, nationality, passportNo, roomAllocation, price} = req.body;
        const package = req.body.cpackage;
        const bookingState = "Not Active";

        const newBooking = new Booking({fName,lName,address, NIC,email, promoCode, travelAgent, checkInDate, checkOutDate, noOfAdults,noOfChildren,package, otherAccomodations, nationality, passportNo, roomAllocation,price,bookingState})
        await newBooking.save()
        .then(()=>res.json("Booking Added"))
        .catch(err=> res.status(400).json('Error: '+ err));
    }catch (err){
        console.error(err);
        res.status(500).send();
    }
});


// add reg user booking
router.post("/addR", auth, async(req,res)=>{
    try{
        const fName = req.customerFname;
        const lName = req.customerLname;
        const address = req.customerAddress;
        const NIC = req.customerNIC;
        const nationality = req.customerNationality;
        const passportNo = req.customerPassportNo;
        const email = req.customerEmail;
        const contact = req.customerContact;

        // console.log(fname);
        // console.log(lname);
        // console.log(address);
        // console.log(NIC);
        // console.log(nationality);
        // console.log(passportNo);
        // console.log(email);
        // console.log(contact);

        const {promoCode, travelAgent, checkInDate, checkOutDate, noOfAdults, noOfChildren, otherAccomodations, roomAllocation, price} = req.body;
        const package = req.body.cpackage;
        const bookingState = "Not Active";

        const newBooking = new Booking({fName,lName,address, NIC,email, promoCode, travelAgent, checkInDate, checkOutDate, noOfAdults,noOfChildren,package, otherAccomodations, nationality, passportNo, roomAllocation,price,bookingState})
        await newBooking.save()
        .then(()=>res.json("Booking Added"))
        .catch(err=> res.status(400).json('Error: '+ err));
    }catch (err){
        console.error(err);
        res.status(500).send();
    }
});


//get relevant user's upcoming bookings
router.get('/getUp', auth ,async(req, res) => {
    try{
        
        let email = req.customerEmail;

        //get data from currently logged email and booking state = Active or Not Active
        await Booking.find({email: email, $or:[{bookingState: "Active"},{bookingState:"Not Active"}]})
        .then(Booking => res.json(Booking))
        .catch(err => res.status(400).json('Error: ' + err));
    }catch (err){
        console.error(err);
        res.status(500).send();
    }
  });

//get relevant user's past bookings
router.get('/getPast', auth ,async(req, res) => {
    try{
        
        let email = req.customerEmail;

        //get data from currently logged email and booking state = Past
        await Booking.find({email: email, bookingState: "Past"})
        .then(Booking => res.json(Booking))
        .catch(err => res.status(400).json('Error: ' + err));
    }catch (err){
        console.error(err);
        res.status(500).send();
    }
  });
  

//update specific booking
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

//delete specific booking
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