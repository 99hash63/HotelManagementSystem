const router = require("express").Router();
const { get } = require("mongoose");
let BookedHalls = require ("../models/BookedHalls");


////------------ADD----------------


http://localhost:8070/bookedHalls/add

router.route("/add").post((req,res) => {

    const id = Number(req.body.id);
    const cusNic = Number(req.body.cusNic);
    const bookedDate = (req.body.bookedDate);
    const noOfSeates = Number(req.body.noOfSeates);
    const noOfTables = Number(req.body.noOfTables);
    const addedFeatures = (req.body.addedFeatures);


    const newBook = new BookedHalls({
        id,
        cusNic,
        bookedDate,
        noOfSeates,
        noOfTables,
        addedFeatures
    })

    newBook.save().then(() => {
      res.json("Booked Hall Added")  

    }).catch((err) => {
        console.log(err);
    })

} )


//--------------Display-------------


http://localhost:8070/bookedHalls/

router.route("/view").get((req,res) => {

    BookedHalls.find().then((bookedHalls) => {
        res.json(bookedHalls)
    }).catch((err) =>{
        console.log(err)
    })
})

//--------------Update------------

http://localhost:8070/bookedHalls/update/

 router.route("/update/:id").put(async(req,res) => {
     let userId = req.params.id;
     const {id,name,type} = req.body;

     const updateBookedHall = {
         id,
         name,
         type
     }

     const update = await BookedHalls.findByIdAndUpdate(userId,updateBookedHall)
     .then(() => {
        res.status(200).send({status : "Booked Hall updated"})
     }).catch((err) => {
         console.log(err);
         res.status(500).send({status : "Error with updating data", error: err.message});
     })    
 }) 


//-----------------Delete-------------------

htttp://localhost:8070/bookedHalls/delete/

router.route("/delete/:id").delete(async(req,res) =>{
    let userId = req.params.id;

    await BookedHalls.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status : "Error with delete user", error:err.message});
    })
})


//-----------------get data ----------------------

htttp://localhost:8070/bookedHalls/get/

router.route("/get/:id").get(async (req,res) =>{
    let userId = req.params.id;
    const user = await BookedHalls.findById(userId)
    .then((BookedHalls) => {
        res.status(200).send({status: "User fetched", BookedHalls})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})





module.exports = router;