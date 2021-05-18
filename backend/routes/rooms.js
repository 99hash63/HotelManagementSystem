const router = require("express").Router();
let Room = require("../models/rooms");

//Add room

router.route("/add").post((req,res)=>{

    // const roomNo = Number(req.body.roomNo);
    // const type = req.body.type;
    // const buildingNo = Number(req.body.buildingNo);
    // const floorNum = Number(req.body.floorNum);
    // const specialDetails = req.body.specialDetails;
    const {roomNo, type, buildingNo, floorNum, specialDetails} = req.body;

    
    const newRoom = new Room({

        roomNo,
        type,
        buildingNo,
        floorNum,
        specialDetails

    })

    newRoom.save().then(()=>{
        res.status(200).json("added");
    }).catch((e)=>{
        console.log(e);
    })



})

// Get all  room

router.route("/").get((req,res)=>{
    Room.find().then((rooms)=>{

        res.json(rooms)

    }).catch((err)=>{
        console.log(err)
    })

})

//update room

router.route("/update/:id").put(async (req,res) =>{
    let roomId = req.params.id;
    const {roomNo, type, buildingNo, floorNum, specialDetails} = req.body;

    const updateRoom = {
        roomNo,
        type,
        buildingNo,
        floorNum,
        specialDetails
    }

   Room.findByIdAndUpdate (roomId, updateRoom).then((room) =>{
        res.json(room)

    }).catch((err) => {
        console.log(err);
        res.json(err)
    
    

})
}) 

//delete room

router.route("/delete/:id").delete(async (req,res) => {
    let roomId = req.params.id;

    await Room.findByIdAndDelete(roomId).then(() => {
        res.status(200).send({status: "room deleted"});

    }).catch((error) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user",error:err.message});


    })

})

// get a room 

router.route("/get/:id").get(async (req,res) => {
    let roomId = req.params.id;
  Room.findById(roomId).then((room) => {
        res.json(room)

    }).catch((err)=> {
        console.log(err.message);
        res.json(err)
    })
})


module.exports = router;