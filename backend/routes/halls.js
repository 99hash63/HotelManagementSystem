const router = require("express").Router();
const { get } = require("mongoose");
let Hall = require ("../models/Hall");


////------------ADD----------------



router.route("/add").post((req,res) => {

    const id = req.body.id;
    const name = req.body.name;
    const type = req.body.type;
    const maxSeats = req.body.maxSeats;
    const maxTables = req.body.maxTables;
    const features = req.body.features;
    const state = req.body.state;
    const price = req.body.price;

    const newHall = new Hall({

        id,
        name,
        type,
        maxSeats,
        maxTables,
        features,
        state,
        price
    })

    newHall.save().then(() => {
      res.json("Hall Added")  

    }).catch((err) => {
        console.log(err);
    })

} )


//--------------Display-------------



router.route("/").get((req,res) => {

    Hall.find().then((halls) => {
        res.json(halls)
    }).catch((err) =>{
        console.log(err)
    })
})



//--------------Update------------


 router.route("/update/:id").put(async(req,res) => {
     let userId = req.params.id;
     const id = req.body.hallid;
     const name = req.body.name;
     const type = req.body.type;
     const maxSeats = req.body.maxSeats;
     const maxTables = req.body.maxTables;
     const features = req.body.features;
     const state = req.body.state;
     const price = req.body.price;

     const updateHall = {
        id, name, type, maxSeats, maxTables, features, state, price
     }

     const update = await Hall.findByIdAndUpdate(userId,updateHall)
     .then(() => {
        res.status(200).send({status : "Hall updated"})
     }).catch((err) => {
         console.log(err);
         res.status(500).send({status : "Error with updating data", error: err.message});
     })    
 }) 


//-----------------Delete-------------------


router.route("/delete/:id").delete(async(req,res) =>{
    let userId = req.params.id;

    await Hall.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status : "Error with delete user", error:err.message});
    })
})


//-----------------get data ----------------------


router.route("/get/:id").get(async (req,res) =>{
    let userId = req.params.id;
    const user = await Hall.findById(userId)
    .then((Hall) => {
        res.status(200).send({status: "User fetched", Hall})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})





module.exports = router;
