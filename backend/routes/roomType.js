const router = require('express').Router();
let roomType = require('../Models/roomType');

// Add roomType
router.route('/add').post((req, res) => {
    const {typeName, capacity, AC, FullBoardPrice, HalfBoardPrice, BedAndBreakfastPrice} = req.body;
    const newRoomType = new roomType({typeName, capacity, AC, FullBoardPrice, HalfBoardPrice, BedAndBreakfastPrice});
    newRoomType.save()
        .then(()=> res.json('roomType added!'))
        .catch(err=> res.status(400).json('Error: '+ err));
}) ;

// Get all roomTypes 
router.route('/').get((req, res) => {
    roomType.find()
        .then(roomType => res.json(roomType))
        .catch(err => res.status(400).json('Error: ' +err));
});

// // Get all roomTypes 
// router.route('/get').get((req, res) => {
//     roomType.find()
//         .then(roomType => res.json(roomType))
//         .catch(err => res.status(400).json('Error: ' +err));
// });


//Ishara........


//update roomType

router.route("/update/:id").put(async (req,res) =>{
    let roomTypeId = req.params.id;
    const {typeName, capacity, AC, FullBoardPrice, HalfBoardPrice, BedAndBreakfastPrice} = req.body;

    const updateroomType = {
        typeName,
        capacity,
        AC,
        FullBoardPrice,
        HalfBoardPrice,
        BedAndBreakfastPrice
    }

   roomType.findByIdAndUpdate (roomTypeId, updateroomType).then((roomType) =>{
        res.json(roomType)

    }).catch((err) => {
        console.log(err);
        res.json(err)
    
    

})
}) 

//delete roomType

router.route("/delete/:id").delete(async (req,res) => {
    let roomTypeId = req.params.id;

    await roomType.findByIdAndDelete(roomTypeId).then(() => {
        res.status(200).send({status: "roomType deleted"});

    }).catch((error) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user",error:err.message});


    })

})

// get a roomType

router.route("/get/:id").get(async (req,res) => {
    let roomTypeId = req.params.id;
  roomType.findById(roomTypeId).then((roomType) => {
        res.json(roomType)

    }).catch((err)=> {
        console.log(err.message);
        res.json(err)
    })
})




module.exports = router;