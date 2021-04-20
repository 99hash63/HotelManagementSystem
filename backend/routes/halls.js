const router = require("express").Router();
const { get } = require("mongoose");
let Hall = require ("../models/Hall");


////------------ADD----------------


http://localhost:8070/halls/add

router.route("/add").post((req,res) => {

    const id = Number(req.body.id);
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


http://localhost:8070/hall/

router.route("/").get((req,res) => {

    Hall.find().then((halls) => {
        res.json(halls)
    }).catch((err) =>{
        console.log(err)
    })
})



//--------------Update------------

http://localhost:8070/hall/update/

 router.route("/update/:id").put(async(req,res) => {
     let userId = req.params.id;
     const {id,name,type} = req.body;

     const updateHall = {
         id,
         name,
         type
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

htttp://localhost:8070/hall/delete/id001

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

htttp://localhost:8070/hall/get

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
